import React, { Component }  from 'react';
import { StyleSheet, Platform, AsyncStorage } from 'react-native';
import { Provider, connect  } from 'react-redux';
import store from '../store'
import LaunchTabNavigator from './LaunchTabNavigator'
import LoginPage from './LoginPage'
import { setUserToLoggedIn } from '../actions/postActions'
import SplashScreen from 'react-native-splash-screen';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class LoginCheck extends Component{

    constructor(props) {
        super(props);
        this.state = {
            accountNumber: "",
            password: "",
            buttonStatus: false,
            signInDisabled: false,
            inputFields: true,
            passwordRequired: null,
            accountNumberRequired: null,
            signedIn:false
        }

    }


    componentDidMount(){
        SplashScreen.hide();
    }


    async componentWillMount(){
        try {
            let status = await AsyncStorage.getItem("Status")
            console.log(status)
            if(status == "true"){
                this.props.setUserToLoggedIn();
            }
            console.log(this.props.loginStatus);
        }
        catch (error) {
            return error;
        }
    }


    render() {
        console.log("In render: "+ this.props.loginStatus);

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
                    <LaunchTabNavigator/>
                </Provider>
            )
        }
    }
}

const mapStateToProps = state => ({
    loginStatus: state.posts.loginStatus
});

export default connect(mapStateToProps, {setUserToLoggedIn})(LoginCheck)