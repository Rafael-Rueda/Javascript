import React from 'react';
import './index.css';
import { setLocalStorageTextTools } from '../../../Functions/global/localstorage';

const TextArea = ({text, setText}) => {
    return (
        <textarea 
        value={text} 
        onChange={e => {setText(e.target.value); setLocalStorageTextTools(e.target.value);}} 
        placeholder="Digite algo legal..." 
        />
    );
};

export default TextArea;