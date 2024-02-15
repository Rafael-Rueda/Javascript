import 'jest-styled-components';
import { render, screen } from '@testing-library/react';
import { Heading } from '.';
import renderTheme from '../../utils/test/renderTheme';
import { theme } from '../../global/styles/theme';

describe('<Heading />', () => {
    it('should render with default values (dark)', () => {
        renderTheme(Heading, {children: 'Heading'}, 'dark', 'heading');
        const heading = screen.getByRole('heading', {name: 'Heading'});

        expect(heading).toHaveStyle({
            'font-size': theme.dark.fonts.sizes.medium,
            'text-transform': 'uppercase',
            color: theme.dark.colors['text-color'],
        });

        expect(heading.tagName.toLowerCase()).toBe('h1');
    });

    it('should render with default values (light)', () => {
        renderTheme(Heading, {children: 'Heading'}, 'light', 'heading');
        const heading = screen.getByRole('heading', {name: 'Heading'});

        expect(heading).toHaveStyle({
            'font-size': theme.light.fonts.sizes.medium,
            'text-transform': 'uppercase',
            color: theme.light.colors['text-color'],
        });

        expect(heading.tagName.toLowerCase()).toBe('h1');
    });
});