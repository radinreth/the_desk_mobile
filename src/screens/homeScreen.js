import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeScreen = ({ navigation }) => ( <View>
  <Text>HomeScreen</Text>
  <Button title="Goto about" 
          onPress={() => navigation.navigate('About')}/>
</View> )

export default HomeScreen