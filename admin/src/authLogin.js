import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from 'admin-on-rest';

class authLogin extends Component {
    submit = (e) => {
        e.preventDefault();

        // gather your data/credentials here
        const credentials = { };

        // Dispatch the userLogin action (injected by connect)
        this.props.userLogin(credentials);
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <a href="/">Login</a>
            </form>
        );
    }
};

export default connect(undefined, { userLogin })(authLogin);
