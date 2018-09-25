import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from '@material-ui/core';

const ConfirmDialog = props => {
    const {
        open,
        handleClose,
        closeAction,
        inputValues,
        handleInput,
        formIsValid,
        cancelLabel,
        submitLabel,
        title,
        text
    } = props;

    return (
        <Dialog
            open={open}
            onClose={() => handleClose('no')}
            aria-labelledby="confirm-dialog-title"
            aria-describedby="confirm-dialog-description"
        >
            <DialogTitle id="confirm-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="confirm-dialog-description">
                    {text}
                    {inputValues &&
                        inputValues.map((input, index) => (
                            <div>
                                <TextField
                                    key={index}
                                    required={!formIsValid}
                                    label={input.placeholder}
                                    placeholder={input.placeholder}
                                    autoFocus={input.autoFocus || 'false'}
                                    name={`${input.name}`}
                                    margin="normal"
                                    value={input.value}
                                    onChange={handleInput}
                                />
                                ;
                            </div>
                        ))}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClose(closeAction || 'cancel')}>
                    {cancelLabel || 'Cancel'}
                </Button>
                <Button
                    color="primary"
                    onClick={() => handleClose(closeAction || 'submit')}
                    disabled={!formIsValid}
                    autoFocus
                >
                    {submitLabel || 'Submit'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};
ConfirmDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    formIsValid: PropTypes.bool,
    inputValues: PropTypes.array,
    closeAction: PropTypes.string,
    submitAction: PropTypes.string,
    cancelLabel: PropTypes.string,
    submitLabel: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string.isRequired
};

ConfirmDialog.defaultProps = {
    formIsValid: true
};

export default ConfirmDialog;
