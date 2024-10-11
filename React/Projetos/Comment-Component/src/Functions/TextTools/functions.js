import { setLocalStorageTextTools } from '../global/localstorage';

export const handleBold = (text, setText) => {
    const textarea = document.querySelector('textarea');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = text.substring(start, end);
    const newText = text.substring(0, start) + '**' + selectedText + '**' + text.substring(end);
    setText(newText);
    setLocalStorageTextTools(newText);
};

export const handleItalic = (text, setText) => {
    const textarea = document.querySelector('textarea');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = text.substring(start, end);
    const newText = text.substring(0, start) + '*' + selectedText + '*' + text.substring(end);
    setText(newText);
    setLocalStorageTextTools(newText);
};

export const handleCode = (text, setText) => {
    const textarea = document.querySelector('textarea');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = text.substring(start, end);
    const newText = text.substring(0, start) + '`' + selectedText + '`' + text.substring(end);
    setText(newText);
    setLocalStorageTextTools(newText);
};