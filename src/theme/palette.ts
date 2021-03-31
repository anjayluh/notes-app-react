import {colors} from '@material-ui/core';

const white = '#FFFFFF';
const themeBlue = '#303f4f';

const palette={
    primary: {
        contrastText: white,
        dark: colors.teal[900],
        main: colors.teal[500],
        light: colors.teal[100]
    },
    secondary: {
        contrastText: white,
        dark: colors.blue[900],
        main: themeBlue,
        light: colors.blue['A400']
    },
    error: {
        contrastText: white,
        dark: colors.red[900],
        main: colors.red[600],
        light: colors.red[400]
    },
    text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600],
        //link: colors.blue[600]
    },
    background: {
        default: '#F4F6F8',
        paper:' white'
    },
    divider: colors.grey[200]
};
export default palette
