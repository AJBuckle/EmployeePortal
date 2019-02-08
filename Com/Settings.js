/**
 * Created by japjohal on 2019-02-08.
 */
import React, { Component } from 'react';
import {  AsyncStorage, View, TextInput} from 'react-native';
import { Text , Button} from 'react-native-elements';
import { connect } from 'react-redux'
import {  setUserToLoggedOut } from '../actions/postActions'

class Settings extends Component {
    constructor(props){
        super(props)
        this.click = this.click.bind(this);
    }
    click(){
        // not needed
        // console.log(this.props.loginStatus)
        // this.props.setUserToLoggedIn();
        AsyncStorage.removeItem("Status")
            .then(resp => console.log("Async storage cleared: resp=> "+ resp))
        this.props.setUserToLoggedOut();
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'white' }}>
                <Text>Settings!</Text>
                <Button
                    title="Log Out"
                    onPress={this.click}
                />
            </View>
        );
    }
}

export default connect(null, {setUserToLoggedOut})(Settings)