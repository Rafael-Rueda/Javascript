import { createContext, useState } from 'react';
import P from 'prop-types';

// Create the context
export const TextCommentContext = createContext('');

// Create a provider component
export const TextCommentProvider = ({ children }) => {
    const [text, setText] = useState(localStorage.getItem('text-comment') || '');

    return (
        <TextCommentContext.Provider value={{ text, setText }}>
            {children}
        </TextCommentContext.Provider>
    );
};

TextCommentProvider.propTypes = {
    children: P.node,
};