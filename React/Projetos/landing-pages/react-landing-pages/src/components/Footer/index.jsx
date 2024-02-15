import P from 'prop-types';
import * as Styled from './styles';
import { Section } from '../Section';
import { Text } from '../Text';

export function Footer({ children }) {

    return (
        <>
            <Styled.Footer id="footer">
                <Text size='medium' uppercase={false}>{children}</Text>
            </Styled.Footer>
        </>
    );
}

Footer.propTypes = {
    children: P.node.isRequired,
};