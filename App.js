/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './src/screens/homeScreen'
import AboutScreen from './src/screens/aboutScreen'
import CareerDetailScreen from './src/screens/careerDetailScreen'

let StackNavigator = createStackNavigator({
  Home: HomeScreen,
  CareerDetail: CareerDetailScreen,
  About: AboutScreen
}, {
  initialRouteName: 'Home'
})

const AppContainer = createAppContainer(StackNavigator)

const App = () => <AppContainer />

export default App;
