import React, { useState } from 'react';
import './index.css';
import TextArea from './TextArea';
import * as TTFunctions from '../../Functions/TextTools/functions.js';

const TextTools = () => {
    const [text, setText] = useState(localStorage.getItem('text') || '');

    const renderMarkdown = (markdown) => {
        return markdown
            .replace(/\*\*(.*?)\*\*/gs, '<b>$1</b>')
            .replace(/\*(.*?)\*/gs, '<i>$1</i>')
            .replace(/`(.*?)`/gs, '<code>$1</code>')
            .replace(/\n/g, '<br />');
    };

    const [showPreview, setShowPreview] = useState(false);

    const togglePreview = () => {
        setShowPreview(!showPreview);
    };

    return (
        <div style={{"display": "grid", "gap": "8px"}}>
            <div className="toolbar">
                <button onClick={() => TTFunctions.handleBold(text, setText)}><i className="fas fa-bold"></i></button>
                <button onClick={() => TTFunctions.handleItalic(text, setText)}><i className="fas fa-italic"></i></button>
                <button onClick={() => TTFunctions.handleCode(text, setText)}><i className="fas fa-code"></i></button>
                <button onClick={() => togglePreview(text)}>
                    {showPreview ? 'Hide Preview' : 'Show Preview'}
                </button>
            </div>
            {showPreview ? (
                <div
                    className="preview"
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(text) }}
                />
            ) : (
                <TextArea text={text} setText={setText} />
            )}
        </div>
    );
};

export default TextTools;