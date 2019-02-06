/**
 * Created by japjohal on 2019-01-13.
 */
import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { connect } from 'react-redux'
import {fetchPosts, newPost, newReduced  } from '../actions/postActions'
import PropTypes from 'prop-types';


class Home extends  Component{
    constructor(props){
        super(props);
        this.click = this.click.bind(this);
    }
    componentWillMount(){
        this.props.fetchPosts();
    }
    click(){
        this.props.newPost("Jappadog");
    }

    render(){
        // const returnVal = this.props.jap.map(post =>(
        //         <Text>{post.title}</Text>
        //     ))

        return(
            <View>
                <Text style={{fontSize:18, top:50, left:60}}> hello world</Text>
                <Button
                    title="ClickME"
                    onPress={this.click}
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    jap: state.posts.items,    // posts come from what you named the reducer in index. items comes from postreducer file
    newItem: state.posts.item,
})

export default connect(mapStateToProps, {fetchPosts, newPost})(Home)