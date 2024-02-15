import { ThemeProvider } from 'styled-components';
import { theme } from '../../global/styles/theme';
import { useContext } from 'react';
import { ThemeStateContext } from '../../contexts/ThemeStateContext';
import { GlobalStyles } from '../../global/styles/globalStyles';
import { BaseTemplate } from '../base';

function App() {
    const [themeState, [setDarkMode, setLightMode]] = useContext(ThemeStateContext);

    return (
        <ThemeProvider theme={themeState === 'dark' ? theme.dark : theme.light}>
            <GlobalStyles />
            <BaseTemplate />
        </ThemeProvider>
    );
}

export default App;
