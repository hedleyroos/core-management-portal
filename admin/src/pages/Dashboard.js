import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ViewTitle } from 'admin-on-rest/lib/mui';
import { contextChangeGMPContext } from '../actions/context';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import DropDownMenu from 'material-ui/DropDownMenu/DropDownMenu';
import MenuItem from 'material-ui/MenuItem/MenuItem';

const mapStateToProps = state => {
    return {
		// domainsAndSites: state.context.domainsAndSites,
		domainsAndSites: ["yo", "there"],
        portalContext: "yo"
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeContext: newContext => dispatch(contextChangeGMPContext(newContext))
    };
};

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            context: this.props.portalContext
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, index, value) {
		this.setState({ context: value });
		this.props.changeContext(value);
    }

    render() {
        const { domainsAndSites } = this.props;
        return (
            <Card>
                <ViewTitle title="Dashboard" />
                <CardText>Lorem ipsum sic dolor amet...</CardText>
                <CardText>
                    <DropDownMenu value={this.state.context} onChange={this.handleChange}>
                        {domainsAndSites
                            ? domainsAndSites.map(place => (
                                  <MenuItem key={place} value={place} primaryText={place} />
                              ))
                            : null}
                    </DropDownMenu>
                </CardText>
            </Card>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
