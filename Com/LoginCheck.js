import React, { Component }  from 'react';
import { StyleSheet, Platform, AsyncStorage } from 'react-native';
import { Provider, connect  } from 'react-redux';
import store from '../store'
import TabNavigator from './TabNavigator'
import LoginPage from './LoginPage'
import { setUserToLoggedIn } from '../actions/postActions'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class LoginCheck extends Component{

    constructor(props) {
        super(props);
    }

    async componentWillMount(){
        try {
            let status = await AsyncStorage.getItem("Status")
            if(status == "true"){
                this.props.setUserToLoggedIn();
            }
        }
        catch (error) {
            return error;
        }
    }


    render() {

        if(this.props.loginStatus == false ){
            return(
            <Provider store={store}>
                <LoginPage/>
            </Provider>
            )
        }

        else{
            return(
                <Provider store={store}>
                    <TabNavigator/>
                </Provider>
            )
        }
    }
}

const mapStateToProps = state => ({
    loginStatus: state.posts.loginStatus
});

export default connect(mapStateToProps, {setUserToLoggedIn})(LoginCheck)