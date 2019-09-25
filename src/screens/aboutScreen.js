import React from 'react'
import { View, Text, Button } from 'react-native'

const AboutScreen = ({ navigation }) => ( <View>
  <Text>AboutScreen</Text>
  <Button title="Goto home" 
          onPress={() => navigation.navigate('Home')}/>
</View> )

export default AboutScreen