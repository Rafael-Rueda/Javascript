import styled, { css } from 'styled-components';

export const Link = styled.a`
    ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.fonts.sizes.medium};
    padding: 0.8rem;
    color: ${theme.colors['text-color']};
    font-weight: bold;
    position: relative;
    cursor: pointer;
    &::after {
      content: '';
      position: absolute;
      bottom: 0.25rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors['MenuLink-color']};
      transition: all 0.3s ease-in-out;
    }
    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;