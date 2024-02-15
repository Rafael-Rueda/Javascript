import { ThemeProvider } from 'styled-components';
import { Header } from '.';
import { ThemeStateProvider } from '../../contexts/ThemeStateContext';
import { GlobalStyles } from '../../global/styles/globalStyles';
import { theme } from '../../global/styles/theme';

const meta = {
    title: 'Footer',
    component: Header,
    args: {
        children: 'My awesome header !',
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
        <Header {...args}></Header>
    </ThemeProvider>
);

export const Header_Light = {
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

export const Header_Dark =
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
