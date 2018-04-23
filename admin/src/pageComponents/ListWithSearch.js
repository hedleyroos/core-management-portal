import React, { Component } from 'react';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';
import {
    List
} from 'admin-on-rest';

class ListWithSearch extends Component {
    state = { input: '' };

    onChangeHandler = event => {
        this.setState({ input: event.target.value });
    }

    onClickHandler = () => {
        console.log(this.state.input);
    }

    render () {
        return (
            <div>
                <Card>
                    <CardText>
                        <TextField name="search" type="text" onChange={this.onChangeHandler} />
                        <RaisedButton primary={true} icon={<SearchIcon />} onClick={this.onClickHandler} />
                    </CardText>
                    <List {...this.props}/>
                </Card>
                
            </div>
        )
    }
}

export default ListWithSearch;