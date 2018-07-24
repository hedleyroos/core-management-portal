import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardText from 'material-ui/Card/CardText';
import TextField from 'material-ui/TextField';

import { reset, setSearchResults, selectUser, invalidToken } from '../../actions/manageUserRoles';
import restClient, { GET_LIST } from '../../restClient';
import InlineTable from '../../fields/InlineTable';
import { makeIDMapping, getUntilDone, getUniqueIDs, apiErrorHandler } from '../../utils';

const mapStateToProps = state => ({
    manageUserRoles: state.manageUserRoles
});

const mapDispatchToProps = dispatch => ({
    invalidToken: () => dispatch(invalidToken()),
    setSearchResults: (search, userResults) => dispatch(setSearchResults(search, userResults)),
    selectUser: (selectedUser, userRoles) => dispatch(selectUser(selectedUser, userRoles)),
    reset: () => dispatch(reset())
});

class UserSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.manageUserRoles.search || ''
        };
        this.getUserPlaceRoles = this.getUserPlaceRoles.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleAPIError = this.handleAPIError.bind(this);
    }

    getUserPlaceRoles(user, place) {
        const { roleMapping } = this.props.manageUserRoles;
        let ids = {};
        return restClient(GET_LIST, `user${place}roles`, {
            filter: { user_id: user.id }
        }).then(async response => {
            let placeRoles = response.data;
            if (placeRoles.length) {
                // GET THE IDS AND REPLACE THEM WITH THE ACTUAL OBJECTS.
                ids = getUniqueIDs(placeRoles, `${place}_id`);
                let places = await getUntilDone(`${place}s`, {
                    ids: ids
                });
                places = makeIDMapping(places);

                placeRoles = placeRoles.reduce((obj, placeRole) => {
                    obj[`${place[0]}:${placeRole[`${place}_id`]}:${placeRole.role_id}`] = {
                        [place]: places[placeRole[`${place}_id`]],
                        role: roleMapping[placeRole.role_id],
                        checked: false
                    };
                    return obj;
                }, {});
            }
            return placeRoles;
        });
    }

    handleSearch(event) {
        const value = event.target.value;
        this.setState({
            value
        });
        if (value.length > 2) {
            restClient(GET_LIST, 'users', {
                filter: { q: value, has_organisation: true, site_ids: '' }
            })
                .then(response => {
                    const userResults = response.data.map(obj => ({
                        id: obj.id,
                        username: obj.username
                    }));
                    this.props.setSearchResults(value, userResults);
                })
                .catch(error => {
                    this.handleAPIError(error);
                });
        } else {
            this.props.reset();
        }
    }

    handleSelect(rows) {
        const { userResults } = this.props.manageUserRoles;
        if (rows.length > 0) {
            const user = userResults[rows[0]];
            this.getUserPlaceRoles(user, 'domain')
                .then(domainRoles => {
                    this.getUserPlaceRoles(user, 'site')
                        .then(siteRoles => {
                            this.props.selectUser(rows[0], { ...domainRoles, ...siteRoles });
                        })
                        .catch(error => {
                            this.handleAPIError(error);
                        });
                })
                .catch(error => {
                    this.handleAPIError(error);
                });
        }
    }

    handleAPIError(error) {
        const invalidToken = apiErrorHandler(error);
        invalidToken && this.props.invalidToken();
    }

    render() {
        const { value } = this.state;
        const { selectedUser, userResults } = this.props.manageUserRoles;
        return (
            <React.Fragment>
                <CardText>
                    <TextField
                        name="UserSearch"
                        placeholder="Search for User"
                        value={value}
                        onChange={this.handleSearch}
                    />
                </CardText>
                <CardText>
                    {userResults && userResults.length > 0 ? (
                        <InlineTable
                            label="Users Found"
                            data={userResults}
                            perPage={5}
                            selected={selectedUser}
                            onRowSelection={this.handleSelect}
                            selectable
                            useCard
                        />
                    ) : (
                        'No Users found.'
                    )}
                </CardText>
            </React.Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserSearch);
