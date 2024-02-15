import React, { useState, useEffect } from 'react';
import P from 'prop-types';
import { Menu } from '../../components/Menu';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { Section } from '../../components/Section';
import { Text } from '../../components/Text';
import { Footer } from '../../components/Footer';
import { Loading } from '../../components/Loading';
import { NotFound } from '../PageNotFound';
import { useParams } from 'react-router-dom';

export function BaseTemplate() {

    const { slug: pageSlug } = useParams();

    const [pageData, setPageData] = useState(undefined);

    useEffect(() => {
        fetch(`http://localhost:1337/api/pages/?filters[slug]=${pageSlug}&populate=deep`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                setPageData(data);
            })
            .catch(error => console.error('There was a problem with your fetch operation:', error));
    }, []);

    if (!pageData) {
        return <Loading />;
    }

    if (pageData.data.length === 0) {
        document.title = 'Not found';
        return (
            <NotFound />
        );
    }

    const menuLinks = pageData.data[0].attributes.menu.menu_links || [];
    const isValidLink = /^https:\/\//.test(pageData.data[0].attributes.menu.logo_image.data);

    document.title = pageData.data[0].attributes.title;

    return (
        <>
            <Menu logo={isValidLink ? pageData.data[0].attributes.menu.logo_image : pageData.data[0].attributes.menu.logo_text} links={menuLinks} />
            <main>
                <Header>{pageData.data[0].attributes.Header.content}</Header>
                {pageData.data[0].attributes.sections.map(section => (
                    <Section key={section.sectionID} type={section.type} background={section.background} sectionID={section.sectionID}>
                        {section.content}
                    </Section>
                ))}
            </main>
            <Footer>{pageData.data[0].attributes.Footer.content}</Footer>
        </>
    );
}

BaseTemplate.propTypes = {
    
};
