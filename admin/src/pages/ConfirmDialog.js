import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const ConfirmDialog = props => {
    const {
        open,
        handleClose,
        closeAction,
        submitAction,
        cancelLabel,
        submitLabel,
        title,
        text
    } = props;

    // This Dialog has the optional ability to have validateable inputs, assign
    // defaults if they are not present. At present does not support custom
    // error messages.
    const inputValues = typeof props.inputValues !== "undefined" ? props.inputValues : '';
    const formIsValid = typeof props.formIsValid !== "undefined" ? props.formIsValid : true;
    const actions = [
        <FlatButton
            label={cancelLabel || 'Cancel'}
            primary={true}
            onClick={() => handleClose(closeAction || 'cancel')}
        />,
        <RaisedButton
            label={submitLabel || 'Submit'}
            primary={true}
            onClick={() => handleClose(closeAction || 'submit')}
            disabled={!formIsValid}
        />
    ];
    return (
            <Dialog
                title={title}
                actions={actions}
                modal={false}
                open={open}
                onRequestClose={() => handleClose('no')}
            >
                {text}
                <div>
                    {inputValues}
                </div>
            </Dialog>
    );
};
ConfirmDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    closeAction: PropTypes.string,
    submitAction: PropTypes.string,
    cancelLabel: PropTypes.string,
    submitLabel: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string.isRequired
}

export default ConfirmDialog;
