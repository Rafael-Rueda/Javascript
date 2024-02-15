import { ThemeProvider } from 'styled-components';
import { MenuLink } from '.';
import { theme } from '../../global/styles/theme';

const meta = {
    title: 'Menu',
    component: MenuLink,
    args: {
        children: 'Click me !',
        theme: 'dark',
        href: 'https://www.google.com.br',
        target: '_blank',
    },
    argTypes: {
        children: { type: 'string' },
        theme: {
            type: 'inline-radio',
            options: ['dark', 'light']
        },
        href: { type: 'string' },
        target: { type: 'inline-radio', options: ['_blank', '_self'] },
    },
};

export default meta;

const Template = (args) => {
    return (
        <ThemeProvider theme={args.theme === 'dark' ? theme.dark : theme.light}>
            <div style={{ display: 'flex' }}>
                <MenuLink {...args}></MenuLink>
            </div>
        </ThemeProvider>
    );
};

export const MenuLink_Light = {
    render: Template,
    args: {theme: 'light'},
    parameters: {
        backgrounds: {
            default: 'light',
        }
    } 
};

export const MenuLink_Dark = {
    render: Template,
    args: {theme: 'dark'},
    parameters: {
        backgrounds: {
            default: 'dark',
        }
    } 
};
