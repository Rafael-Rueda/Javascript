import styled, { css } from 'styled-components';

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 3.2rem;
    margin-right: 3.2rem;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        flex-wrap: nowrap;
        overflow-y: auto;
    }

    & a {
        @media screen and (max-width: 1400px) {
            font-size: 1.6rem;
        }
    }

`;

export const Navbar = styled.nav`
    display: flex;
    position: fixed;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: ${(props) => props.theme.colors.secondary};
    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: 100%;
        position: fixed;
        justify-content: center;
    };
`;

export const NavbarButton = styled.button`
    right: 0;
    display: none;
    position: fixed;
    z-index: 10;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 0.8rem;
    cursor: pointer;
    & span {
        display: inline-block;
        margin: 0;
        padding: 0;
        background-color: ${(props) => props.theme.colors['text-color']};
        width: 2.0rem;
        height: 0.2rem;
        margin-top: 0.4rem;
    }
    @media screen and (max-width: 768px) {
        display: inline-flex;
    }

    min-height: 40px;
    min-width: 40px;

    & p {
        display: inline-block;
        margin: 0;
        padding: 0;
        background-color: ${(props) => props.theme.colors['text-color']};
        width: 2.0rem;
        height: 0.2rem;
        margin-top: 1rem;
        &:nth-of-type(1) {
            transform: rotate(45deg);
            position: absolute;
        }
        &:nth-of-type(2) {
            transform: rotate(-45deg);
            position: absolute;
        }
    }
`;