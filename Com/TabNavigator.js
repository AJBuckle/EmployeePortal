import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeTab from "./UserHome";
import Settings from "./Settings";
import HomePageTabNavigation from './HomeStackNavigator'

const TabNavigator = createBottomTabNavigator({
    Home:HomePageTabNavigation,
    Settings:Settings
});

export default createAppContainer(TabNavigator);