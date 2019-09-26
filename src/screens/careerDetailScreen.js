import React from 'react'
import { View, Text, Button } from 'react-native'

const CareerDetailScreen = ({ navigation }) => ( <View>
  <Text>CareerDetailScreen</Text>
  <Button title="Goto home" 
          onPress={() => navigation.navigate('Home')}/>
</View> )

export default CareerDetailScreen