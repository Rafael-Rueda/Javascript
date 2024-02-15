import { ThemeProvider } from 'styled-components';
import { Menu } from '.';
import { theme } from '../../global/styles/theme';
import { GlobalStyles } from '../../global/styles/globalStyles';

const meta = {
    title: 'Menu',
    component: Menu,
    args: {
        logo: 'https://logosmarcas.net/wp-content/uploads/2020/04/Amazon-Logo.png',
        links: [
            {linkID: 0, linkUrl: '#body', newTab: false, linkName: 'Body'},
            {linkID: 1, linkUrl: '#footer', newTab: false, linkName: 'Footer'},
            {linkID: 2, linkUrl: '#footer', newTab: false, linkName: 'Footer'},
            {linkID: 3, linkUrl: '#footer', newTab: false, linkName: 'Footer'},
            {linkID: 4, linkUrl: '#footer', newTab: false, linkName: 'Footer'},
            {linkID: 5, linkUrl: '#footer', newTab: false, linkName: 'Footer'},
            {linkID: 6, linkUrl: '#footer', newTab: false, linkName: 'Footer'},
        ],
        theme: 'dark'
    },
    argTypes: {
        logo: {type: 'string'},
        theme: {type: 'inline-radio', options: ['dark', 'light']}
    }
};

export default meta;

const Template = (args) => {
    return (
        <ThemeProvider theme={args.theme === 'dark' ? theme.dark : theme.light}>
            <GlobalStyles />
            <Menu {...args} />
        </ThemeProvider>
        
    );
};

export const Menu_Dark = {
    render: Template,
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};
export const Menu_Light = {
    render: Template,
    args: {
        theme: 'light',
    },
    parameters: {
        backgrounds: {
            default: 'light',
        },
    },
};
