import P from 'prop-types';
import * as Styled from './styles';
import { Text } from '../Text';

export function Section({ children, type = 'one-column', background = false, sectionID = 'sec', style = {}}) {

    return (
        <>
            <Styled.Section id={sectionID} $twoc={type === 'two-column' ? true : false} $background={background ? true : false} $gallery={type === 'gallery' ? true : false} style={{...style}} dangerouslySetInnerHTML={{ __html: children }}></Styled.Section>
        </>
    );
}

Section.propTypes = {
    children: P.node.isRequired,
    type: P.oneOf(['two-column', 'one-column', 'gallery']).isRequired,
    background: P.bool,
    sectionID: P.string.isRequired,
    style: P.object,
};