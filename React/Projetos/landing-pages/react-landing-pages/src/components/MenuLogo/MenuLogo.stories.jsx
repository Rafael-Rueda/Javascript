import { ThemeProvider } from 'styled-components';
import { MenuLogo } from '.';
import { theme } from '../../global/styles/theme';
import { GlobalStyles } from '../../global/styles/globalStyles';

const meta = {
    title: 'Menu',
    component: MenuLogo,
    args: {
        src: 'https://logosmarcas.net/wp-content/uploads/2020/04/Amazon-Logo.png',
    },
    argTypes: {
        src: { type: 'string' },
    }
};

export default meta;

const Template = (args) => {
    return (
        <ThemeProvider theme={theme.dark}>
            <GlobalStyles />
            <MenuLogo {...args} />
        </ThemeProvider>
    );
};

export const Menu_Logo = {
    render: Template,
};