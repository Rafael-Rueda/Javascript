import React, { useContext } from 'react';
import './index.css';
import { setLocalStorageTextTools } from '../../../Functions/global/localstorage';
import { TextCommentContext } from '../../../Contexts/TextCommentContext/TextComment';

// Forward the ref to the actual textarea element
const TextArea = React.forwardRef((props, ref) => {
    const { text, setText } = useContext(TextCommentContext);
    
    return (
        <textarea
            ref={ref}
            value={text}
            onChange={e => { setText(e.target.value); setLocalStorageTextTools(e.target.value); }}
            placeholder="Digite algo legal..."
            {...props} // Spread any additional props passed in
        />
    );
});

export default TextArea;
