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

const HomeScreen = ({ navigation }) => ( <View>
                            <Text>HomeScreen</Text>
                            <Button title="Goto about" 
                                    onPress={() => navigation.navigate('About')}/>
                          </View> )

const AboutScreen = ({ navigation }) => ( <View>
                        <Text>AboutScreen</Text>
                        <Button title="Goto home" 
                                onPress={() => navigation.navigate('Home')}/>
                      </View> )

let StackNavigator = createStackNavigator({
  Home: HomeScreen,
  About: AboutScreen
}, {
  initialRouteName: 'Home'
})

const AppContainer = createAppContainer(StackNavigator)

const App = () => <AppContainer />

export default App;
