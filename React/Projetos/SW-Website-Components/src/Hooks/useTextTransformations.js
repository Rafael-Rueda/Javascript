import { useContext } from 'react';
import { TextCommentContext } from '../Contexts/TextCommentContext/TextComment';
import { setLocalStorageTextTools } from '../Functions/global/localstorage';

// Custom hook to handle text transformations
const useTextTransformations = (textAreaRef) => {
    const { text, setText } = useContext(TextCommentContext); // Use context inside a hook

    // Helper function to handle text transformations
    const transformText = (transformCallback) => {
        if (!textAreaRef || !textAreaRef.current) {
            console.error("Textarea ref is not initialized");
            return; // Prevent further execution if the ref is not set
        }

        const textarea = textAreaRef.current;

        if (textarea !== null) {
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const selectedText = text.substring(start, end);
            const transformedText = transformCallback(selectedText);
            const newText = text.substring(0, start) + transformedText + text.substring(end);

            setText(newText); // Update the context state
            setLocalStorageTextTools(newText); // Save to local storage
        }
    };

    // Specific transformation functions
    const handleBold = () => {
        transformText((selectedText) => `**${selectedText}**`);
    };

    const handleItalic = () => {
        transformText((selectedText) => `*${selectedText}*`);
    };

    const handleCode = () => {
        transformText((selectedText) => `\`${selectedText}\``);
    };

    const handleUpperCase = () => {
        transformText((selectedText) => selectedText.toUpperCase());
    };

    const handleLowerCase = () => {
        transformText((selectedText) => selectedText.toLowerCase());
    };

    const handleReverseText = () => {
        transformText((selectedText) => selectedText.split('').reverse().join(''));
    };

    return {
        handleBold,
        handleItalic,
        handleCode,
        handleUpperCase,
        handleLowerCase,
        handleReverseText,
    };
};

export default useTextTransformations;
