import { ThemeProvider } from 'styled-components';
import { Heading } from '.';
import { ThemeStateProvider } from '../../contexts/ThemeStateContext';
import { GlobalStyles } from '../../global/styles/globalStyles';
import { theme } from '../../global/styles/theme';

const meta = {
    title: 'Heading',
    component: Heading,
    args: {
        children: 'Qqer coisa',
        theme: 'dark',
    },
    argTypes: {
        children: { type: 'string' },
        theme: {
            type: 'inline-radio',
            options: ['dark', 'light']
        },
        size: {
            control: {
                type: 'inline-radio',
                options: ['small', 'medium', 'large', 'huge']
            }
        },
    },
};

export default meta;

// Stories

const Template = (args) => (
    <ThemeProvider theme={args.theme === 'dark' ? theme.dark : theme.light}>
        <GlobalStyles />
        <Heading {...args}></Heading>
    </ThemeProvider>
);

//Just passing the function (render) and passing args after
export const Heading_Light = Template;

Heading_Light.args = {
    theme: 'light',
    type: 'h1',
    size: 'huge',
    uppercase: true,
};

Heading_Light.parameters = {
    backgrounds: {
        default: 'light',
    }
};


// Use {render: ..., args:...}
export const Heading_Dark =
{
    render: Template,
    args: { theme: 'dark', type: 'h1', size: 'huge', uppercase: true, },
    parameters: {
        backgrounds: {
            default: 'dark',
        }
    }
};
