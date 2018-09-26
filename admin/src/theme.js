/**
 * Generated theme.js code. Edit at own risk.
 * When regenerated the changes will be lost.
 **/
import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';

export const theme = createMuiTheme({
    palette: {
        primary: teal,
        secondary: {
            main: '#00695c'
        }
    }
});
/** End of Generated Code **/

export const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        height: '1px',
        alignItems: 'center',
        justifyContent: 'center',
        background: teal[500],
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    card: {
        minWidth: 300
    },
    cardAction: {
        zIndex: 2,
        display: 'inline-block',
        float: 'right'
    },
    avatar: {
        margin: '1em',
        textAlign: 'center',
        width: 60,
        height: 60,
        backgroundColor: teal[500]
    },
    avatarDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
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
        height: '20rem'
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
        margin: '0 1em'
    },
    // Theme styling added for EditableDatagrid AOR copied components.
    table: {
        tableLayout: 'auto'
    },
    tbody: {
        height: 'inherit'
    },
    header: {
        th: {
            fontWeight: 'normal',
            fontSize: 12,
            padding: 0,
            height: 56,
            textAlign: 'left',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            color: 'rgb(158, 158, 158)',
            position: 'relative'
        },
        'th:first-child': {
            fontWeight: 'normal',
            fontSize: 12,
            padding: '0 0 0 12px',
            height: 56,
            textAlign: 'left',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            color: 'rgb(158, 158, 158)',
            position: 'relative'
        }
    },
    cell: {
        td: {
            padding: '0 12px',
            whiteSpace: 'normal'
        },
        'td:first-child': {
            padding: '0 12px 0 16px',
            whiteSpace: 'normal'
        }
    },
    sortButton: {
        minWidth: 40
    },
    nonSortableLabel: {
        position: 'relative',
        paddingLeft: 16,
        paddingRight: 16,
        verticalAlign: 'middle',
        letterSpacing: 0,
        textTransform: 'uppercase',
        fontWeight: 500,
        fontSize: 14
    },
    treeSelect: {
        fontSize: 16,
        height: 40,
        width: 256,
        marginTop: 40
    },
    divider: {
        margin: 10
    },
    checkbox: {
        marginTop: -10,
        marginBottom: -10
    }
};
