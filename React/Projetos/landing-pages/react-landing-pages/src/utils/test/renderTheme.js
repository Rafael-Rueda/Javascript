import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../global/styles/theme';
import { GlobalStyles } from '../../global/styles/globalStyles';

export default function renderTheme(Component$, props, colorTheme, testid) {
    return render(
        <ThemeProvider theme={theme[colorTheme]}>
            <GlobalStyles />
            <Component$ data-testid={testid} {...props} />
        </ThemeProvider>,
    );
}

// Usage: renderTheme(Element, {props}, 'dark||light', 'testid');
