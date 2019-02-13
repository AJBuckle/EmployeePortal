import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeTab from "./UserHome";
import Settings from "./Settings";
import HomePageTabNavigation from './HomeStackNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabNavigator = createBottomTabNavigator({
    Home:{
        screen: HomePageTabNavigation,
        navigationOptions: {
        tabBarLabel:"Home",
        tabBarIcon: ({ tintColor }) => (
            <Icon name="home" size={30} color="black" />
        )
    },
},
    Settings:{
        screen: Settings,
        navigationOptions: {
            tabBarLabel:"Settings",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="cog" size={30} color="black" />
            )
        },
    }
});

export default createAppContainer(TabNavigator);