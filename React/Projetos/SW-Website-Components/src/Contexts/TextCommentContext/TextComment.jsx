import React, { createContext, useState } from 'react';

// Create the context
export const TextCommentContext = createContext();

// Create a provider component
export const TextCommentProvider = ({ children }) => {
    const [text, setText] = useState(localStorage.getItem('text-comment') || '');

    return (
        <TextCommentContext.Provider value={{ text, setText }}>
            {children}
        </TextCommentContext.Provider>
    );
};