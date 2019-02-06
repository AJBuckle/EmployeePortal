/**
 * Created by japjohal on 2019-01-13.
 */
import React, { Component } from 'react';
import {  StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'
import { fetchPosts, newPost, changeStatus } from '../actions/postActions'


class Test extends  Component{
    constructor(props){
        super(props)
        this.click = this.click.bind(this);
    }
    componentWillMount(){
        this.props.fetchPosts();
    }
    click(){
        this.props.newPost("Jappadog");
        console.log(this.props.loginStatus)
        this.props.changeStatus();
        AsyncStorage.removeItem("Status")
            .then(resp => console.log("Async storage cleared: resp=> "+ resp))
    }

    render(){
        return(
            <View styles={{ color:'red'}}>
                <Text style={{fontSize:18, top:50, left:60,color:'white'}}> hello world {this.props.loginStatus.toString()}</Text>
                <Button
                    title="ClickME"
                    onPress={this.click}
                />
            </View>
        )
    }
}




const mapStateToProps = state => ({
    // jap: state.posts.items,    // posts come from what you named the reducer in index. items comes from postreducer file
    // newItem: state.posts.item,
    loginStatus: state.posts.loginStatus
})

 export default connect(mapStateToProps, {fetchPosts, newPost, changeStatus})(Test)

