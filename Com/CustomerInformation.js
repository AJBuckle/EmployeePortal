/**
 * Created by japjohal on 2019-02-08.
 */
import React, { Component } from 'react';
import {  StyleSheet,  View, FlatList, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { Text, Button, Image, ListItem} from 'react-native-elements';

export default class CustomerInformation extends Component {
    static navigationOptions = {
        title: 'Customer Info',
    }
    render(){
        const { navigation } = this.props;
        const name = navigation.getParam("name","Jap")
        const id = navigation.getParam("id","idJap")
        return(
            <View>
                <Text>Hello {JSON.stringify(name)}</Text>
                <Text>Hello {JSON.stringify(id)}</Text>
            </View>
        )
    }
}