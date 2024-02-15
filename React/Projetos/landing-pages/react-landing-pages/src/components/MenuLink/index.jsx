import P from 'prop-types';
import * as Styled from './styles';

export function MenuLink({children, href, target}) {

    return (
        <>
            <Styled.Link href={href} target={target}>{children}</Styled.Link>
        </>
    );
}

MenuLink.propTypes = {
    children: P.node.isRequired,
    href: P.string.isRequired,
    target: P.oneOf(['_blank', '_self']).isRequired,
};