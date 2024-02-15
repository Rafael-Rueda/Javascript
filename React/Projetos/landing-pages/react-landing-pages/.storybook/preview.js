import { ThemeProvider } from 'styled-components';
import { theme } from '../src/global/styles/theme'
import { GlobalStyles } from '../src/global/styles/globalStyles'
import { ThemeStateContext, ThemeStateProvider } from '../src/contexts/ThemeStateContext';
import { useContext } from 'react';

/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'light',
            values: [
                {
                    name: 'light',
                    value: theme.light.colors.primary
                },
                {
                    name: 'dark',
                    value: theme.dark.colors.primary
                },
            ],
        },
    },
};

export default preview;

export const decorators = [
    (Story) => (
        <ThemeStateProvider>
            <ThemeProvider theme={theme.light}>
                <GlobalStyles />
                <Story />
            </ThemeProvider>
        </ThemeStateProvider>
    )
]
