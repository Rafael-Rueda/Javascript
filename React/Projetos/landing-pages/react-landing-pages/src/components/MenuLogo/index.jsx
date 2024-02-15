import P from 'prop-types';
import * as Styled from './styles';

export function MenuLogo({ src }) {

    const isValidLink = /^https:\/\//.test(src);

    return (
        <>
            {isValidLink ? <Styled.LogoImg src={src} alt='Menu Logo'></Styled.LogoImg> : <Styled.LogoText>{src}</Styled.LogoText>}
        </>
    );
}

MenuLogo.propTypes = {
    src: P.string.isRequired,
};