import 'jest-styled-components';
import { render, screen } from '@testing-library/react';
import renderTheme from '../../utils/test/renderTheme';
import { Text } from '.';
import { theme } from '../../global/styles/theme';

describe('<Text/>', () => {
    it('should render a text', () => {
        renderTheme(Text, {children: 'test'}, 'dark', 'testText');
        const text = screen.getByText('test');
        expect(text).toBeInTheDocument();
    });

    it('should have default values', () => {
        renderTheme(Text, {children: 'test'}, 'dark', 'testText');
        const text = screen.getByText('test');
        expect(text).toHaveStyle({'font-size': theme.dark.fonts.sizes.medium});
    });
});