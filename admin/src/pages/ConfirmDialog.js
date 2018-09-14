import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const ConfirmDialog = props => {
    const {
        open,
        handleClose,
        closeAction,
        inputValues,
        handleInput,
        formIsValid,
        submitAction,
        cancelLabel,
        submitLabel,
        title,
        text
    } = props;

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
                {inputValues && inputValues.map((input, index) =>
                    <div>
                        <TextField
                            key={index}
                            required={!formIsValid}
                            floatingLabelText={input.floatingLabelText}
                            placeholder={input.placeholder}
                            autoFocus={input.autoFocus || 'false'}
                            name={`${input.name}`}
                            value={input.value}
                            onChange={handleInput}
                        />;
                    </div>
                )}
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
}

ConfirmDialog.defaultProps = {
    formIsValid: true
};

export default ConfirmDialog;
