/**
 * Created by japjohal on 2019-01-13.
 */
import React, { Component } from 'react';
import {  StyleSheet,  View } from 'react-native';
import { Text , Button , Image} from 'react-native-elements';
import { connect } from 'react-redux'
import { setUserToLoggedIn } from '../actions/postActions'


class Test extends  Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'white' }}>
                <Text style={{fontSize:18, top:50, left:60,color:'black'}}> hello world {this.props.loginStatus.toString()}</Text>
            </View>
        )
    }
}




const mapStateToProps = state => ({
    // jap: state.posts.items,    // posts come from what you named the reducer in index. items comes from postreducer file
    // newItem: state.posts.item,
    loginStatus: state.posts.loginStatus
})

 export default connect(mapStateToProps, { setUserToLoggedIn})(Test)

