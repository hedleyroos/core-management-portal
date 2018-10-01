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
        fontSize: '12px',
        color: 'rgba(0, 0, 0, 0.54)'
    },
    customTableLabel: {
        padding: '15px 0 0 0',
        fontSize: '13px',
        color: 'rgba(0, 0, 0, 0.54)'
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
        width: '50%'
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
    },
    dateTimeInput: {
        marginTop: 15,
        marginBottom: 15
    },
    formControl: {
        marginRight: 15
    }
};

export const datagridStyles = {
    // Theme styling added for EditableDatagrid React Admin copied components.
    table: {
        tableLayout: 'auto'
    },
    tbody: {
        height: 'inherit'
    },
    headerCell: {
        padding: '0 12px',
        color: 'rgba(0, 0, 0, 0.54)',
        fontSize: '12px',
        fontWeight: 'normal',
        textAlign: 'right',
        flexDirection: 'row-reverse'
    },
    checkbox: {},
    row: {},
    rowEven: {},
    rowOdd: {},
    rowCell: {
        padding: '0 12px',
        '&:last-child': {
            padding: '0 12px'
        }
    }
};
