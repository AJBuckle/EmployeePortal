
import React, { Component }  from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import {  connect  } from 'react-redux';
import { Input, Button, Text } from 'react-native-elements';
import { setUserToLoggedIn } from '../actions/postActions'



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
            signedIn:false
        }

    }

    // componentWillMount(){
    //     this.getStatus()
    //         .then(response =>{
    //             console.log("Response from getStatus: " + response)
    //         })
    // }
    // why if i have these two functions am i geting a error

    // getStatus = async() =>{
    //     try {
    //         let status = await AsyncStorage.getItem("Status");
    //
    //         if(status == "true"){
    //             this.setState({signedIn:true})
    //         }
    //         return null;
    //     }
    //     catch (error){
    //         return error;
    //     }
    // };

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
                    this.saveStatus()
                        .catch(err => console.log(err))
                }
            });
        }
        //verify login with database
    }

    saveStatus = async() =>{
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
                            title="Sign In"
                            disabled={this.state.signInDisabled}
                            disabledStyle={{ backgroundColor: '#0b3954' }}
                            buttonStyle={{ backgroundColor: '#0b3954' }}
                            containerStyle={styles.button}
                            loading={this.state.buttonStatus}
                            titleStyle={{ color: "rgba(253,255,252,1)" }}
                            onPress={() => { this.signIn() }}
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


// not mapping any props as of right now
export default connect(null, {setUserToLoggedIn})(LoginPage)