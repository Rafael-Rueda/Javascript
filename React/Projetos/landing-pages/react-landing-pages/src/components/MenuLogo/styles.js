import styled, { css } from 'styled-components';

export const LogoImg = styled.img`
    width: 120px;
    height: 60px;
    justify-self: flex-start;
    

    @media screen and (max-width: 1400px) {
        width: 90px;
        height: 45px;
    }
`;

export const LogoText = styled.h3`
    color: ${(props) => props.theme.colors['text-color']};
`;