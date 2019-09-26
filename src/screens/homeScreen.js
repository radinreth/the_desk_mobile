import React from 'react'
import axios from 'axios'
import { View, Text, Button, FlatList } from 'react-native'
class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      careers: []
    }
  }

  fetchCareers = async () => {
    try {
      let response = await axios.get('http://localhost:3000/careers')
      console.log(response)
      this.setState({
        careers: response.data
      })
    } catch(e) {
      console.log(e)
    }
  }

  componentDidMount() {
    this.fetchCareers()
  }

  _renderItem = (item) => {
    return <Text>{item.title}</Text>
  }

  render() {
    const { navigation } = this.props

    return (
      <View>
        <Text>all careers:{this.state.careers.length}</Text>
        <FlatList
          data={this.state.careers}
          renderItem={(career) => this._renderItem(career.item)}
          keyExtractor={career => career.id}
        />
        <Button title="goto about"
                onPress={() => navigation.navigate('About')} />
      </View>
    )
  }
}

export default HomeScreen