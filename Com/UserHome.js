/**
 * Created by japjohal on 2019-01-13.
 */
import React, { Component } from 'react';
import {  View, FlatList, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { Text, Button,  ListItem} from 'react-native-elements';
import { connect } from 'react-redux'
import { createStackNavigator, createAppContainer } from 'react-navigation';

class HomeTab extends  Component{
    constructor(props){
        super(props)
        this.state ={
            data:[{name:"jason",key:"1"},{name:"jap",key:"2"},{name:"jason",key:"3"},{name:"jap",key:"4"},{name:"iii",key:"5"},{name:"bb",key:"6"},{name:"qqq",key:"7"},{name:"ddd",key:"8"},{name:"ggg",key:"9"},{name:"lll",key:"10"},{name:"opopo",key:"11"},{name:"adsf",key:"12"}],
            pic: "../avatars/ava.png"
        }
        this.ClickMe = this.ClickMe.bind(this);
    }


    componentDidMount(){
        // fetch("http://localhost:3000/services/1")
        //     .then(resp =>{
        //         return resp.json();
        //     })
        //     .then((resp) => )

    }
    // keyExtractor = (item, index) => index
    // renderItem = ({ item }) => (
    //     <ListItem
    //         title={item.name}
    //         subtitle={item.subtitle}
    //         leftAvatar={{ source: require("../avatars/ava.png")}}
    //     />
    // )
    ClickMe(data){
        console.log("in click me")
        console.log(data)
        this.props.navigation.navigate('CustomerDetail',{
            name:data.name,
            id:data.key
        })
    }


    render(){

        // let list  =
        //     this.state.data.map((i,key) => (
        //     <ListItem
        //         key={i.key}
        //         leftAvatar={{ source: require("../avatars/ava.png")}}
        //         title={i.name}
        //         subtitle={i.name}
        //     />
        // ))

        return(

            <SafeAreaView style={{flex:1, backgroundColor: "#e6e6e6"}}>
                <View style={{flex:1}}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.key}
                    renderItem={({item}) =>
                    <TouchableWithoutFeedback onPress={ () => this.ClickMe(item)}>
                            <ListItem
                              key={item.name}
                              leftAvatar={{ source: require("../avatars/ava.png")}}
                              title={item.name}
                              subtitle={item.name}
                          />
                     </TouchableWithoutFeedback>
                        }
                />
                </View>
                <View style={{flex:1}}>
                    <Text>Hello</Text>
                    <Button
                        title="Go to Details"
                        onPress={() => this.props.navigation.navigate('CustomerDetial')}
                        />
                </View>
            </SafeAreaView>
        )
    }
}




const mapStateToProps = state => ({
    // jap: state.posts.items,    // posts come from what you named the reducer in index. items comes from postreducer file
    // newItem: state.posts.item,
    loginStatus: state.posts.loginStatus
})

 export default connect(mapStateToProps,)(HomeTab)

