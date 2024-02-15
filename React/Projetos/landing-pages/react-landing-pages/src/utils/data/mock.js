export const data = {
    menu: {
        logo_image: 'https://logosmarcas.net/wp-content/uploads/2020/04/Amazon-Logo.png',
        logo_text: 'Amazon',
        links: [
            {
                linkID: 0,
                linkName: 'Home',
                linkUrl: '#header',
                newTab: false,
            },
            {
                linkID: 1,
                linkName: 'Section 1',
                linkUrl: '#sec1',
                newTab: false,
            },
            {
                linkID: 2,
                linkName: 'Section 2',
                linkUrl: '#sec2',
                newTab: false,
            },
            {
                linkID: 3,
                linkName: 'Section 3',
                linkUrl: '#sec3',
                newTab: false,
            },
        ],
    },
    header: {
        content: 'Recipes'
    },
    sections: [
        {
            content: '<h2> JANUARY BRINGS US FIREFOX 85</h2><img style="grid-row: span 2" src="https://landingpagecursojs.netlify.app/assets/img/javascript.svg"/><p>To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.</p>',
            type: 'two-column',
            background: false,
            sectionID: 'sec1',
        },
        {
            content: '<h2>NEWS COVERAGE AND SOME SURPRISES</h2><p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries. We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.</p>',
            type: 'one-column',
            background: true,
            sectionID: 'sec2',
        },
        {
            content: '<div><h2>My Grid</h2></div><div></div><div></div> <div><h2>Teste1</h2><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.</p></div> <div><h2>Teste2</h2><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.</p></div> <div><h2>Teste3</h2><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.</p></div>',
            type: 'gallery',
            background: false,
            sectionID: 'sec3',
        }
    ],
    footer: {
        content: 'Feito por Rafael Rueda.'
    }
};
