import styled from 'styled-components';

export const Section = styled.section`
    background-color: ${(props) => {
        return props.$background ? props.theme.colors.secondary : 'transparent';
    }};

    display: grid;

    justify-items: center;

    grid-template-columns: ${(props) => {
        return props.$gallery ? '1fr 1fr 1fr' : props.$twoc ? '1fr 1fr' : '1fr';
    }};

    gap: 1.6rem;
    min-height: 70vh;
    padding: 20%;

    color: ${(props) => props.theme.colors['text-color']};
    grid-template-rows: repeat(auto-fill, minmax(100px, auto));

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    padding-top: 6.4rem;
`;
