import React, { Component }  from 'react';
import { StyleSheet, View, AsyncStorage, AlertIOS } from 'react-native';
import {  connect  } from 'react-redux';
import { Input, Button, Text } from 'react-native-elements';
import { setUserToLoggedIn, userWillUseFaceID } from '../actions/postActions'
import SplashScreen from 'react-native-splash-screen';
import TouchID from 'react-native-touch-id'

// why isnt signIn binded
class LoginPage extends Component{

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
            signedIn:false,
            signIn:"Submit",
        }

    }

    componentDidMount(){
        SplashScreen.hide();
    }


    signIn = () => {
        let accountNumber = this.state.accountNumber;
        let password = this.state.password

        if (accountNumber.trim() === "") {
            this.setState({ accountNumberRequired: "required" });
        } else {
            this.setState({ accountNumberRequired: null });
        }
        if (password.trim() === "") {
            this.setState({ passwordRequired: "required" });
        } else {
            this.setState({ passwordRequired: null }, () => {
                if (this.state.accountNumberRequired === null && this.state.passwordRequired === null) {
                    this.setState({
                        buttonStatus: true,
                        signInDisabled: true,
                        inputFields: false,
                    });
                    this.setUserToLoggedIn()
                        .catch(err => console.log(err))
                }
            });
        }
        //verify login with database
    }

    signInFaceId(){

        const optionalConfigObject = {
            fallbackLabel: "Show Passcode", // iOS
            passcodeFallback: true // iOS
        }

        TouchID.authenticate('to demo this react-native component', optionalConfigObject)
            .then(success => {
                this.setUserToLoggedIn().catch((err) =>AlertIOS.alert(err))
            })
            .catch(error => {
                AlertIOS.alert('Authentication Failed');
            });
    }

    componentWillMount(){
        this.getBioMetricsStatus();

    }

    getBioMetricsStatus = async() =>{
        let status = await AsyncStorage.getItem("faceId");
        if(status == "true"){
            this.props.userWillUseFaceID();
        }
    };

    setUserToLoggedIn = async() =>{
        try {
            await AsyncStorage.setItem("Status", "true");
            this.props.setUserToLoggedIn();
            return null; // here for testing purposes
        }
        catch (error){
            return error;
        }
    };




    render() {
            return (
                <View style={styles.container}>
                    <Text style={styles.textContainer} h3>Unplug and Thrive</Text>

                    <View style={styles.form}>
                        <Input
                            placeholder='Employee Number'
                            shake={true}
                            editable={this.state.inputFields}
                            inputStyle={{ color: "rgba(253,255,252,1)" }}
                            errorStyle={{ color: 'red' }}
                            onChangeText={(text) => this.setState({ accountNumber: text })}
                            errorMessage={this.state.accountNumberRequired}
                        />

                        <Input
                            placeholder='Password'
                            shake={true}
                            secureTextEntry={true}
                            editable={this.state.inputFields}
                            inputStyle={{ color: "rgba(253,255,252,1)" }}
                            errorStyle={{ color: 'red' }}
                            onChangeText={(text) => this.setState({ password: text })}
                            errorMessage={this.state.passwordRequired}
                        />
                        <Button
                            title={this.props.faceIdStatus == true? "Login with FaceID ":"Login"}
                            disabled={this.state.signInDisabled}
                            disabledStyle={{ backgroundColor: '#0b3954' }}
                            buttonStyle={{ backgroundColor: '#0b3954' }}
                            containerStyle={styles.button}
                            loading={this.state.buttonStatus}
                            titleStyle={{ color: "rgba(253,255,252,1)" }}
                            onPress={() => { this.props.faceIdStatus == true? this.signInFaceId():this.signIn() }}
                        />
                    </View>
                </View>
            )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(8,126,139)',
    },

    form: {
        backgroundColor: "rgba(253,255,252, 0.5)",
        width: "80%",
        padding: "5%",
        borderRadius: 20,
    },

    button: {
        marginTop: 10,
    },

    textContainer: {
        marginHorizontal: '5%',
        color: "rgba(253,255,252,1)",
        marginBottom: "10%",
        fontWeight: 'bold',
    },

});

const mapStateToProps = state => ({
    faceIdStatus: state.posts.usingFaceId
})

export default connect(mapStateToProps, {setUserToLoggedIn, userWillUseFaceID })(LoginPage)