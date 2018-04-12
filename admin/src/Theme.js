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
        justifyContent: 'center',
    },
    card: {
        minWidth: 300,
    },
    avatar: {
        margin: '1em',
        textAlign: 'center ',
    }
};
