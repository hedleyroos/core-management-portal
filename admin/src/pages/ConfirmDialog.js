import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const ConfirmDialog = props => {
    const { open, handleClose, handleInput, inputValues, closeAction, submitAction, cancelLabel, submitLabel, title, text } = props;
    const formIsValid = inputValues.deletionReason.length > 0
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
                    <TextField
                        required={!formIsValid}
                        floatingLabelText='Reason for user deletion*'
                        placeholder='Reason'
                        autoFocus='true'
                        defaultValue='Management Portal'
                        name='deletionReason'
                        value={inputValues.deletionReason}
                        onChange={(event) => handleInput(event)}
                    />
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
