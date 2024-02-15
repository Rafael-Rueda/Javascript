import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../global/styles/globalStyles';
import { Darkmode } from '.';
import { theme } from '../../global/styles/theme';

const meta = {
    title: 'Darkmode',
    component: Darkmode,
    args: {
        theme: 'dark',
    },
    argTypes: {
        theme: {type: 'inline-radio', options: ['dark', 'light']}
    }
};

export default meta;

const Template = (args) => {
    return (
        <ThemeProvider theme = {args.theme === 'dark' ? theme.dark : theme.light }>
            <GlobalStyles />
            <Darkmode {...args} />
        </ThemeProvider>
    );
};

export const Darkmode_Dark = {
    render: Template,
    args: {
        theme: 'dark'
    },
    parameters: {
        backgrounds: {
            default: 'dark'
        },
    },
};

export const Darkmode_Light = {
    render: Template,
    args: {
        theme: 'light'
    },
    parameters: {
        backgrounds: {
            default: 'light'
        },
    },
};