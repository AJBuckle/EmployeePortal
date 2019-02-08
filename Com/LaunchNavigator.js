import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Test from "./HomeTab";
import Settings from "./Settings";


const TabNavigator = createBottomTabNavigator({
    Home:Test,
    Settings:Settings
});

export default createAppContainer(TabNavigator);