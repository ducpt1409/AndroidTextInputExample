import React, { Component } from 'react';
import { SafeAreaView, TextInput, View, Text, StyleSheet, FlatList, ScrollView, Button } from 'react-native'

var DATA = [
  { id: '1', user: 'theraalexy', pasword: '1233' },
  { id: '2', user: 'ducpt1409', pasword: '1234' },
  { id: '3', user: 'duc1409@123', pasword: '1235' },
  { id: '4', user: 'duc4998', pasword: '1236' },
]
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  inItem = ({ item }) => {
    return (
      <Text>{item.user} - {item.pasword}</Text>
    )
  }

  render() { // Nếu ở data có thuộc tính id rồi thì không cần thêm Key Extraction (thêm cũng dc)
    // Nếu không có thuộc tính id phải gán keyExtraction với 1 thuộc tính nào đó.
    return (
      <View style={styles.container}>
        <View style={{ flex: 2 }}>
          <Text>Input field</Text>
          <Text style={{ color: 'cyan' }}>{this.state.username}</Text>
          <TextInput value={this.state.username} placeholder='Write somethings ... '
            style={styles.input} onChangeText={(x) => this.setState({ username: x })}></TextInput>
        </View>

        <View style={{ flex: 2 }}>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>Flat List field</Text>
          <FlatList data={DATA} renderItem={this.inItem} keyExtractor={item => item.user}></FlatList>
        </View>

      </View>
    )
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#ecf0f1"
  }
})

export default App;