import * as Styled from './styles';
import { Header } from '../../components/Header';

export function NotFound() {
    return (
        <>
            <Header>Page not found: Error 404 <Styled.Paragraph>Oops ! The Landing Page you are looking for does not exist ! <a href="/">Click here</a> to come back.</Styled.Paragraph></Header>  
        </>
    );
}