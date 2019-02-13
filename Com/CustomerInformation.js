/**
 * Created by japjohal on 2019-02-08.
 */
import React, { Component } from 'react';
import {  StyleSheet,  View, FlatList, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { Text, Button, Image, ListItem} from 'react-native-elements';

export default class CustomerInformation extends Component {
    constructor(props){
        super(props)
        this.state ={
            data:[{name:"jason",key:"1"},{name:"jap",key:"2"},{name:"jason",key:"3"},{name:"jap",key:"4"},{name:"iii",key:"5"},{name:"bb",key:"6"},{name:"qqq",key:"7"},{name:"ddd",key:"8"},{name:"ggg",key:"9"},{name:"lll",key:"10"},{name:"opopo",key:"11"},{name:"adsf",key:"12"}],
            pic: "../avatars/ava.png"
        }
        this.ClickMe = this.ClickMe.bind(this);
    }

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
                <Button
                title="Clickme"
                onPress={this.ClickMe}/>
            </View>
        )
    }
}