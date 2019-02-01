/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import { Input, Button, Text } from 'react-native-elements';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
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
    }
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
          console.log('haha?')
          this.setState({
            buttonStatus: true,
            signInDisabled: true,
            inputFields: false,
          });
        }
      });
    }


    //verify login with database
  }

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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b3954',
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
