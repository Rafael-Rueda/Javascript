import { createContext, useRef, useState } from 'react';
import P from 'prop-types';
import { buildActions } from './buildActions';
import { searchMode } from '../../utils/theme/searchMode';

export const ThemeStateContext = createContext();

export const ThemeStateProvider = ({ children }) => {
    const [themeState, setThemeState] = useState(searchMode());

    const actions = useRef(buildActions(setThemeState));

    return (
        <ThemeStateContext.Provider value={[themeState, actions.current]}>
            {children}
        </ThemeStateContext.Provider>
    );
};
    
ThemeStateProvider.propTypes = {
    children: P.node.isRequired,
};
