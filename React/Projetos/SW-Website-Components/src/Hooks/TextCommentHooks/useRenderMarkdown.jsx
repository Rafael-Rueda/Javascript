import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const useRenderMarkdown = () => {
    const [markdown, setMarkdown] = useState('');

    const renderMarkdown = (markdown) => {
        // First, handle code blocks
        const elements = {
            bold: [],
            italic: [],
            linebreak: [],
            code: []
        };

        const processedMarkdown = markdown.replace(/`(.*?)`/gs, (match, p1) => {
            elements['code'].push(p1); // Store the code content
            return `{{CODE_BLOCK_${elements['code'].length - 1}}}`; // Replace with a placeholder
        });

        // Then handle bold and italic, making sure not to affect placeholders
        const formattedMarkdown = processedMarkdown
            .replace(/\*\*(.*?)\*\*/gs, (match, p1) => { elements['bold'].push((<strong>{p1}</strong>)); return `{{BOLD_BLOCK_${elements['bold'].length - 1}}}` }) // Bold transformation

            .replace(/\*(.*?)\*/gs, (match, p1) => { elements['italic'].push((<em>{p1}</em>)); return `{{ITALIC_BLOCK_${elements['italic'].length - 1}}}` }) // Italic transformation

            .replace(/\n/g, (match) => { elements['linebreak'].push((<br/>)); return `{{LINEBREAK_BLOCK_${elements['linebreak'].length - 1}}}` }); // Line breaks

        const semiFinalMarkdown = [];

        formattedMarkdown.split(/{{(.*?)}}/).forEach((element, index) => {
            if (element.includes('BOLD_BLOCK')) {
                semiFinalMarkdown.push(<span key={index}>{elements['bold'][parseInt(element.split('_')[2])]}</span>);
            } else if (element.includes('ITALIC_BLOCK')) {
                semiFinalMarkdown.push(<span key={index}>{elements['italic'][parseInt(element.split('_')[2])]}</span>);
            } else if (element.includes('LINEBREAK_BLOCK')) {
                semiFinalMarkdown.push(<span key={index}>{elements['linebreak'][parseInt(element.split('_')[2])]}</span>);
            } else if (element.includes('CODE_BLOCK')) {
                semiFinalMarkdown.push(<span key={index}><code>{elements['code'][parseInt(element.split('_')[2])]}</code></span>);
            } else {
                semiFinalMarkdown.push(<span key={index}>{element}</span>);
            }
        });

        return <>{semiFinalMarkdown}</>;
    };

    return { renderMarkdown }
}

export default useRenderMarkdown;