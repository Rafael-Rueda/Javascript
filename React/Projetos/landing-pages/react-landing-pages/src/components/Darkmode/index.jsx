import P from 'prop-types';
import * as Styled from './styles';
import { useContext, useEffect, useRef, useState } from 'react';
import { ThemeStateContext } from '../../contexts/ThemeStateContext';
import { searchMode } from '../../utils/theme/searchMode';

export function Darkmode() {

    const $dm = useRef();
    const $dmball = useRef();
    const [lock, setLock] = useState(false);
    const [themeState, [setDarkMode, setLightMode]] = useContext(ThemeStateContext);
    
    useEffect(() => {
        if (searchMode() === 'dark' && !lock) {
            $dmball.current.style.marginLeft = '25px';
            setDarkMode();
            setLock(true);
        }
    }, []);

    useEffect(() => {

        function handleClick() {
            if (!lock) {
                $dmball.current.style.marginLeft = '25px';
                setDarkMode();
                setLock(true);
            } else {
                $dmball.current.style.marginLeft = '0px';
                setLightMode();
                setLock(false);
            }
        }

        $dm.current.addEventListener('click', handleClick);

        return () => {
            $dm.current.removeEventListener('click', handleClick);
        };
    }, [lock]);

    return (
        <>
            <Styled.DarkmodeContainer ref={$dm}>
                <Styled.DarkmodeBall ref={$dmball}></Styled.DarkmodeBall>
            </Styled.DarkmodeContainer>
        </>
    );
}

Darkmode.propTypes = {
    
};