import { ThemeProvider } from 'styled-components';
import { Text } from '.';
import { theme as themeG } from '../../global/styles/theme';
import { GlobalStyles } from '../../global/styles/globalStyles';
import P from 'prop-types';

const meta = {
    title: 'Text',
    component: Text,
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero inventore ad dicta obcaecati quisquam dignissimos est quas, autem explicabo facilis laboriosam expedita, aliquid sequi dolores voluptatum illum maiores, repudiandae cupiditate.',
        theme: 'dark',
        size: 'medium',
        uppercase: false,
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
        uppercase: { type: 'boolean' }
    },

};

export default meta;

const Template = ({ theme, ...args }) => {
    return (
        <ThemeProvider theme={theme === 'dark' ? themeG.dark : themeG.light}>
            <GlobalStyles />
            <Text {...args}></Text>
        </ThemeProvider>
    );
};

Template.propTypes = {
    theme: P.oneOf(['dark', 'light']),
};

export const Text_Light = {
    render: Template,
    args: {
        theme: 'light',
    },
    parameters: {
        backgrounds: {
            default: 'light',
        }
    }
};

export const Text_Dark = {
    render: Template,
    parameters: {
        backgrounds: {
            default: 'dark',
        }
    }
};