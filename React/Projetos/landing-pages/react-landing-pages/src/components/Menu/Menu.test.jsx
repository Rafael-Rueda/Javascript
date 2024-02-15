import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Menu } from '.';
import renderTheme from '../../utils/test/renderTheme';

describe('Menu component', () => {
    const logo = 'https://logosmarcas.net/wp-content/uploads/2020/04/Amazon-Logo.png';
    const links = [
        { linkID: 0, linkUrl: '#body', newTab: false, linkName: 'Body' },
        { linkID: 1, linkUrl: '#footer', newTab: false, linkName: 'Footer' },
    ];

    test('renders menu with logo and links', () => {
        renderTheme(Menu, {logo:logo, links: links } ,'dark', 'menu');

        const logoElement = screen.getByAltText('Menu Logo');
        expect(logoElement).toBeInTheDocument();

        const bodyLinkElement = screen.getByText('Body');
        expect(bodyLinkElement).toBeInTheDocument();

        const footerLinkElement = screen.getByText('Footer');
        expect(footerLinkElement).toBeInTheDocument();
    });
});
