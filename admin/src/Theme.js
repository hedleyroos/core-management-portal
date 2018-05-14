import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { pink500, pink300 } from 'material-ui/styles/colors';

export const muiTheme = getMuiTheme({
    palette: {
        primary1Color: pink500,
        accent1Color: pink300
    }
});

export const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        height: '1px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        minWidth: 300
    },
    avatar: {
        margin: '1em',
        textAlign: 'center '
    },
    customTableDiv: {
        lineHeight: '24px',
        width: '100%',
        height: 'auto',
        display: 'inline-block',
        position: 'relative',
        backgroundColor: 'transparent',
        fontFamily: 'Roboto, sans-serif',
        cursor: 'auto',
        paddingTop: '2em'
    },
    customTableHeader: {
        fontSize: '14px',
        color: 'rgba(0, 0, 0, 1)'
    },
    customTableLabel: {
        fontSize: '13px',
        color: 'rgba(0, 0, 0, 0.35)'
    },
    chip: {
        margin: 4
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    cardCentered: {
        textAlign: 'center'
    },
    circularProgress: {
        padding: '50px'
    }
};
