import React, { useContext, useRef, useState } from 'react';
import './index.css';
import TextArea from './TextArea';
import Submission from './Submission/index.jsx';
import { TextCommentContext } from '../../Contexts/TextCommentContext/TextComment';
import useTextTransformations from '../../Hooks/useTextTransformations.js';

const TextTools = () => {

    const { text, setText } = useContext(TextCommentContext);
    const textAreaRef = useRef(null);
    const { handleBold, handleItalic, handleCode, handleUpperCase, handleLowerCase, handleReverseText } = useTextTransformations(textAreaRef);

    const renderMarkdown = (markdown) => {
        // First, handle code blocks
        const codeBlocks = [];
        const processedMarkdown = markdown.replace(/`(.*?)`/gs, (match, p1) => {
            codeBlocks.push(p1); // Store the code content
            return `{{CODE_BLOCK_${codeBlocks.length - 1}}}`; // Replace with a placeholder
        });

        // Then handle bold and italic, making sure not to affect placeholders
        const formattedMarkdown = processedMarkdown
            .replace(/\*\*(.*?)\*\*/gs, '<b>$1</b>') // Bold transformation
            .replace(/\*(.*?)\*/gs, '<i>$1</i>') // Italic transformation
            .replace(/\n/g, '<br />'); // Line breaks

        // Restore code blocks
        const finalMarkdown = formattedMarkdown.replace(/{{CODE_BLOCK_(\d+)}}/g, (match, p1) => {
            return `<code>${codeBlocks[parseInt(p1)]}</code>`;
        });

        return finalMarkdown;
    };


    const [showPreview, setShowPreview] = useState(false);

    const togglePreview = () => {
        setShowPreview(!showPreview);
    };

    return (
        <div style={{ "display": "grid", "gap": "8px" }}>
            <div className="toolbar">
                <button onClick={handleBold}><i className="fas fa-bold"></i></button>
                <button onClick={handleItalic}><i className="fas fa-italic"></i></button>
                <button onClick={handleCode}><i className="fas fa-code"></i></button>
                <button onClick={handleUpperCase}><i className="fas fa-text-height"></i></button>
                <button onClick={handleLowerCase}><i className="fas fa-text-width"></i></button>
                <button onClick={handleReverseText}><i className="fas fa-exchange-alt"></i></button>
                <button onClick={() => togglePreview(text)}>
                    {showPreview ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
                </button>
            </div>
            {showPreview ? (
                <div
                    className="preview"
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(text) }}
                />
            ) : (
                <TextArea ref={textAreaRef} />
            )}
            <Submission />
        </div>
    );
};

export default TextTools;