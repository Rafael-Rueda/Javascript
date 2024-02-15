import { ThemeProvider } from 'styled-components';
import { Footer } from '.';
import { ThemeStateProvider } from '../../contexts/ThemeStateContext';
import { GlobalStyles } from '../../global/styles/globalStyles';
import { theme } from '../../global/styles/theme';

const meta = {
    title: 'Footer',
    component: Footer,
    args: {
        children: 'My awesome footer !',
        theme: 'dark',
    },
    argTypes: {
        children: { type: 'string' },
        theme: {
            type: 'inline-radio',
            options: ['dark', 'light']
        },
    },
};

export default meta;

// Stories

const Template = (args) => (
    <ThemeProvider theme={args.theme === 'dark' ? theme.dark : theme.light}>
        <GlobalStyles />
        <Footer {...args}></Footer>
    </ThemeProvider>
);

export const Footer_Light = {
    render: Template,
    args: {
        theme: 'light',
    },
    parameters: {
        backgrounds: {
            default: 'light',
        }
    },
};

export const Footer_Dark =
{
    render: Template,
    args: {
        theme: 'dark'
    },
    parameters: {
        backgrounds: {
            default: 'dark',
        }
    }
};
