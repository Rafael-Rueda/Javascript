import { useContext, useRef, useState } from 'react';
import './index.css';
import TextArea from './TextArea';
import Submission from './Submission/index.jsx';
import { TextCommentContext } from '../../Contexts/TextCommentContext/TextComment';
import useTextTransformations from '../../Hooks/TextCommentHooks/useTextTransformations.js';
import useRenderMarkdown from '../../Hooks/TextCommentHooks/useRenderMarkdown.jsx';

const TextTools = () => {

    const { text, setText } = useContext(TextCommentContext);
    const textAreaRef = useRef(null);

    const { handleBold, handleItalic, handleCode, handleUpperCase, handleLowerCase, handleReverseText } = useTextTransformations(textAreaRef);

    const { renderMarkdown } = useRenderMarkdown();

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
                <div className="preview">
                    {renderMarkdown(text)}
                </div>
            ) : (
                <TextArea ref={textAreaRef} />
            )}
            <Submission />
        </div>
    );
};

export default TextTools;