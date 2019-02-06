import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { connect } from 'react-redux'
import {fetchPosts, newPost, newReduced  } from '../actions/postActions'
import PropTypes from 'prop-types';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Test from "./Test"



class SettingsScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'white' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
    Home:Test,
    Settings:SettingsScreen
});

export default createAppContainer(TabNavigator);