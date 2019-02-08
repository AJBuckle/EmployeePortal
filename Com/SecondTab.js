import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Test from "./Test";
import Settings from "./Settings";


const TabNavigator = createBottomTabNavigator({
    Home:Test,
    Settings:Settings
});

export default createAppContainer(TabNavigator);