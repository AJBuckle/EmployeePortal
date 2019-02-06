
import React, { Component }  from 'react';
import { StyleSheet, View, Platform, AsyncStorage } from 'react-native';
import { Provider, connect  } from 'react-redux';
import store from '../store'
import { Input, Button, Text } from 'react-native-elements';
import SecondTab from './SecondTab'
import { changeStatus } from '../actions/postActions'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class Login extends Component{
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
    componentWillMount(){
        this.getStatus()
            .then(response =>{
                console.log("Response from getStatus: " + response)
            })
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
                    this.saveStatus()
                        .then(response =>{console.log(response)})
                }
            });
        }


        //verify login with database
    }
    saveStatus = async() =>{
        try {
            await AsyncStorage.setItem("Status", "true")
            this.setState({signedIn:true})
        }
        catch (error){
            console.log(error)
        }
    }
    getStatus = async() =>{
        try {
            let status = await AsyncStorage.getItem("Status");
            if(status == "true"){
                this.setState({signedIn:true})
            }
            return ("Value of status is: "+ status)
        }
        catch (error){
            console.log(error)
        }
    }


    render() {
        if(this.state.signedIn == false ){
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
        else{
            return(
                <Provider store={store}>
                    <SecondTab/>
                </Provider>
            )
        }
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
    jap: state.posts.items,    // posts come from what you named the reducer in index. items comes from postreducer file
    newItem: state.posts.item,
    loginStatus: state.posts.loginStatus
})

export default connect(mapStateToProps, {changeStatus})(Login)