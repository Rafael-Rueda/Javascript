import React, { useContext } from 'react';
import './index.css';
import { setLocalStorageTextTools } from '../../../Functions/global/localstorage';
import { TextCommentContext } from '../../../Contexts/TextCommentContext/TextComment';

const TextArea = () => {
    const {text, setText} = useContext(TextCommentContext);

    return (
        <textarea 
        value={text} 
        onChange={e => {setText(e.target.value); setLocalStorageTextTools(e.target.value);}} 
        placeholder="Digite algo legal..." 
        />
    );
};

export default TextArea;