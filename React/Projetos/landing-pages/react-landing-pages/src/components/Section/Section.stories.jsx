import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../global/styles/globalStyles';
import { Section } from '.';
import { theme } from '../../global/styles/theme';

const meta = {
    title: 'Section',
    component: Section,
    args: {
        theme: 'dark',
        children: (
            <>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi voluptas, error itaque vel, ab esse voluptatem expedita consequatur assumenda enim vitae est iste vero tempora praesentium labore eligendi? Sit, unde!</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aperiam! Unde, ea! Repudiandae facilis qui dolore recusandae ad quaerat possimus corrupti explicabo non, necessitatibus tempore laborum optio libero vel nobis.</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aperiam! Unde, ea! Repudiandae facilis qui dolore recusandae ad quaerat possimus corrupti explicabo non, necessitatibus tempore laborum optio libero vel nobis.</div>
            </>
        ),
        type: 'two-column',
        background: false,
        sectionID: 'sec0',
    },
    argTypes: {
        theme: { type: 'inline-radio', options: ['dark', 'light'] },
        type: { type: 'inline-radio', options: ['two-column', 'one-column', 'gallery'] },
        background: { type: 'boolean' },
        sectionID: {type: 'string'},
    }
};

export default meta;

const Template = (args) => {
    return (
        <ThemeProvider theme={args.theme === 'dark' ? theme.dark : theme.light}>
            <GlobalStyles />
            <Section {...args}></Section>
        </ThemeProvider>
    );
};

export const Section_Dark = {
    render: Template,
    args: {
        theme: 'dark',
    },
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};

export const Section_Light = {
    render: Template,
    args: {
        theme: 'light',
    },
    parameters: {
        backgrounds: {
            default: 'light',
        },
    },
};