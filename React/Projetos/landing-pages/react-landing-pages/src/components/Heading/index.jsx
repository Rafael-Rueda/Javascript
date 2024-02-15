import P from 'prop-types';
import * as Styled from './styles';
import { useContext } from 'react';
import { ThemeStateContext } from '../../contexts/ThemeStateContext';

export function Heading({ children, type = 'h1', size = 'medium', uppercase = true}) {

    return (
        <>
            <Styled.Title as={type} size={size} $uppercase={uppercase}>{children}</Styled.Title>
        </>
    );
}

Heading.propTypes = {
    children: P.node.isRequired,
    type: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    size: P.oneOf(['small', 'medium', 'large', 'huge']),
    uppercase: P.bool,
};
