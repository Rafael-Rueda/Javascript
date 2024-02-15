export function searchMode() {
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }

    return localStorage.getItem('theme');
}