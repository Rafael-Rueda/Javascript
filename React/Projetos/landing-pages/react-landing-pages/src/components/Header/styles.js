import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center; 
    justify-content: center;
    max-height: 120px;
    min-height: 60px; 
    height: 120px; 
    background-color: ${(props) => props.theme.colors.secondary};
`;