import React, { Component } from 'react'

import UserHome from './UserHome';
import CustomerInformation from './CustomerInformation';

import { createStackNavigator, createAppContainer } from 'react-navigation'

export const Navigator = new createStackNavigator({
    UserHome: { screen: UserHome },
    CustomerDetail: { screen: CustomerInformation },
},
    {
    initialRouteName: 'UserHome',
    })


export default createAppContainer(Navigator);
