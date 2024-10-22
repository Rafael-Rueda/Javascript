// Desc: This hook is used to render markdown text with code blocks and syntax highlighting
// Usage: const { renderMarkdown } = useRenderMarkdown();

import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const useRenderMarkdown = () => {

    const extractLanguage = (block) => {
        const firstLine = block.split('\n')[0].trim();
        const langMatch = firstLine.match(/^```(\w+)/); // Match for language immediately after ```
        return langMatch ? langMatch[1] : ''; // Return language if found, otherwise empty string
    };

    const renderMarkdown = (markdown) => {
        // First, handle code blocks
        const elements = {
            bold: [],
            italic: [],
            linebreak: [],
            code: []
        };

        let language = '';
        

        const processedMarkdown = markdown.replace(/```(\w+)\s*([\s\S]*?)\s*```/g, (match, lang, code) => {
            console.log("Full match:", match);
            console.log("Detected language:", lang);
            console.log("Code block content:", code);

            language = lang || ''; // Get the language for syntax highlighting
            
            elements['code'].push(code.trim()); // Store the code content
            
            return `{{CODE_BLOCK_${elements['code'].length - 1}}}`; // Replace with a placeholder
        });

        // Then handle bold and italic, making sure not to affect placeholders
        const formattedMarkdown = processedMarkdown
            .replace(/\*\*(.*?)\*\*/gs, (match, p1) => { elements['bold'].push((<strong>{p1}</strong>)); return `{{BOLD_BLOCK_${elements['bold'].length - 1}}}` }) // Bold transformation

            .replace(/\*(.*?)\*/gs, (match, p1) => { elements['italic'].push((<em>{p1}</em>)); return `{{ITALIC_BLOCK_${elements['italic'].length - 1}}}` }) // Italic transformation

            .replace(/\n/g, (match) => { elements['linebreak'].push((<br />)); return `{{LINEBREAK_BLOCK_${elements['linebreak'].length - 1}}}` }); // Line breaks

        const semiFinalMarkdown = [];

        formattedMarkdown.split(/{{(.*?)}}/).forEach((element, index) => {
            if (element.includes('BOLD_BLOCK')) {
                semiFinalMarkdown.push(<span key={index}>{elements['bold'][parseInt(element.split('_')[2])]}</span>);
            } else if (element.includes('ITALIC_BLOCK')) {
                semiFinalMarkdown.push(<span key={index}>{elements['italic'][parseInt(element.split('_')[2])]}</span>);
            } else if (element.includes('LINEBREAK_BLOCK')) {
                semiFinalMarkdown.push(<span key={index}>{elements['linebreak'][parseInt(element.split('_')[2])]}</span>);
            } else if (element.includes('CODE_BLOCK')) {
                semiFinalMarkdown.push(
                    <span key={index}>
                        <SyntaxHighlighter language={language} style={darcula}>
                            {elements['code'][parseInt(element.split('_')[2])]}
                        </SyntaxHighlighter>
                    </span>
                );
            } else {
                semiFinalMarkdown.push(<span key={index}>{element}</span>);
            }
        });

        return <>{semiFinalMarkdown}</>;
    };

    return { renderMarkdown }
}

export default useRenderMarkdown;