import React, { Component } from 'react'

import HomeTab from './HomeTab';
import Settings from './Settings';

import { createStackNavigator, createAppContainer } from 'react-navigation'

export const Navigator = new createStackNavigator({
    Feed: { screen: HomeTab },
    ItemDetail: { screen: Settings },
},{
    initialRouteName: 'Feed',
})


export default createAppContainer(Navigator);
