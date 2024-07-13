import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#34e7e4',
            dark: '#00D8D6',
        },
        secondary: {
            main: '#d2dae2',
            dark: '#808e9b',
        },
        info: {
            main: '#575fcf',
            dark: '#3c40c6',
        },
        success: {
            main: '#0be881',
            dark: '#05c46b',
        },
        warning: {
            main: '#ffc048',
            dark: '#ffa801',
        },
        error: {
            main: '#ff5e57',
            dark: '#ff3f34',
        },
    },
});

export const AppThemeProvider = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
// 42:12
