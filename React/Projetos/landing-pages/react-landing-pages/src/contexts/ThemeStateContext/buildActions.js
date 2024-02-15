export const buildActions = (dispatch) => {
    const setDarkMode = () => {
        dispatch('dark');
        localStorage.setItem('theme', 'dark');
    };
    const setLightMode = () => {
        dispatch('light');
        localStorage.setItem('theme', 'light');
    };

    return [setDarkMode, setLightMode];
};
