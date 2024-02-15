import styled, { css } from 'styled-components';

const titleSize = (props) => {
    switch (props.size) {
        case 'small': {
            return props.theme.fonts.sizes.small;
        }
        case 'medium': {
            return props.theme.fonts.sizes.medium;
        }
        case 'large': {
            return props.theme.fonts.sizes.large;
        }
        case 'huge': {
            return props.theme.fonts.sizes.huge;
        }
        default: {
            return props.theme.fonts.sizes.medium;
        }
    }
};

const titleUpper = (props) => {
    if (props.$uppercase) {
        return 'uppercase';
    } else {
        return 'none';
    }
};

const titleMediaQuery = (props) => {
    switch (props.size) {
        case 'small': {
            return;
        }
        case 'medium': {
            return;
        }
        case 'large': {
            return (
                css`@media screen and (max-width: 768px) {
                    font-size: ${props.theme.fonts.sizes.medium};    
                }`
            );
        }
        case 'huge': {
            return (
                css`@media screen and (max-width: 768px) {
                    font-size: ${props.theme.fonts.sizes.medium};    
                }`
            );
        }
    }
};

export const Title = styled.h1`
    ${(props) => css`
        color: ${props.theme.colors['text-color']};
        font-size: ${titleSize(props)};
        text-transform: ${titleUpper(props)};
        ${titleMediaQuery(props)};
    `}
`;
