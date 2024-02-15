import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';

export function Header({ children }) {

    return (
        <>
            <Styled.Header id="header">
                <Heading size='large' uppercase={false}>{children}</Heading>
            </Styled.Header>
        </>
    );
}

Header.propTypes = {
    children: P.node.isRequired,
};