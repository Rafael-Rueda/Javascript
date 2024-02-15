import styled from 'styled-components';

export const DarkmodeBall = styled.div`
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.colors['text-color']};
    transition: all .5s;
`;

export const DarkmodeContainer = styled.div`

    border: 2px solid ${(props) => props.theme.colors['text-color']};
    padding: 0.4rem;
    border-radius: 16px;
    width: 60px;
    cursor: pointer;
`;