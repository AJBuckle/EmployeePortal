import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeTab from "./HomeTab";
import Settings from "./Settings";
import HomePageTab from './HomePageTab'

const TabNavigator = createBottomTabNavigator({
    Home:HomePageTab,
    Settings:Settings
});

export default createAppContainer(TabNavigator);