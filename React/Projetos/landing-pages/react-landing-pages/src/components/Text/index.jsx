import P from 'prop-types';
import * as Styled from './styles';

export function Text({children, size, uppercase}) {

    return (
        <>
            <Styled.Text size={size} $uppercase={uppercase}>{children}</Styled.Text>
        </>
    );
}

Text.propTypes = {
    children: P.node.isRequired,
    size: P.oneOf(['small', 'medium', 'large', 'huge']),
    uppercase: P.bool,
};
