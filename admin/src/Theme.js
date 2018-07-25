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
    cardAction: {
        zIndex: 2,
        display: 'inline-block',
        float: 'right',
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
        cursor: 'auto'
    },
    customTableHeader: {
        fontSize: '14px',
        color: 'rgba(0, 0, 0, 1)'
    },
    customTableLabel: {
        padding: '15px 0 0 0',
        fontSize: '13px',
        color: 'rgba(0, 0, 0, 0.35)'
    },
    customTableBottom: {
        backgroundColor: '#e6e6e6'
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
    waitIcon: {
        width: '20rem',
        height: '20rem',
        color: 'white'
    },
    linearProgress: {
        width: '50%'
    },
    fieldOptionsCard: {
        margin: '20px',
        width: '30rem'
    },
    wideDropDown: {
        width: '500px'
    },
    permissionMessage: {
        textAlign: 'center',
        fontFamily: 'Roboto, sans-serif',
        opacity: 0.5,
        margin: '0 1em',
    }
};
