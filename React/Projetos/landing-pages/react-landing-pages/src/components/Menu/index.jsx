import P from 'prop-types';
import * as Styled from './styles';
import { MenuLink } from '../MenuLink';
import { MenuLogo } from '../MenuLogo';
import { useEffect, useRef, useState } from 'react';
import { Darkmode } from '../Darkmode';

// <Menu logo = "https://logosmarcas.net/wp-content/uploads/2020/04/Amazon-Logo.png" links = { [{ linkID: 0, linkName: '', url: '', open_in_new_tab: true | false }] } />
export function Menu({logo, links }) {

    const navbar = useRef();
    const navMenu = useRef();
    const [hiddenShown, setHS] = useState(true);

    useEffect(() => {
        
        function handleResize() {
            if (window.innerWidth > 768) {
                navbar.current.style.display = 'flex';
                navMenu.current.innerHTML = '<p></p><p></p>';
                setHS(true);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function handleClick() {
        if (hiddenShown) {
            navbar.current.style.display = 'none';
            navMenu.current.innerHTML = '<span></span><span></span><span></span>';
        } else {
            navbar.current.style.display = 'flex';
            navMenu.current.innerHTML = '<p></p><p></p>';
        }
        setHS(prev => !prev);
    }

    return (
        <>
            <Styled.NavbarButton ref={navMenu} onClick={handleClick}><p></p><p></p></Styled.NavbarButton>
            <Styled.Navbar ref={navbar}>
                <Darkmode />
                <MenuLogo src={logo}/>
                <Styled.LinksContainer>
                    {links.map((link) => {
                        return <MenuLink key={link.linkID} href={link.url} target={link.open_in_new_tab ? '_blank' : '_self'}> {link.linkName} </MenuLink>;
                    })}
                </Styled.LinksContainer>
            </Styled.Navbar>
        </>
    );
}

Menu.propTypes = {
    logo: P.string.isRequired,
    links: P.arrayOf(P.shape({
        linkID: P.string.isRequired,
        linkName: P.string.isRequired,
        url: P.string.isRequired,
        open_in_new_tab: P.bool,
    })).isRequired,
};
