
import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Alert } from 'react-native';
import Header from './component/Header';
import TodoItem from './component/TodoItem';
import AddTodo from './component/AddTodo';
const App = () => {

  const [todos, setTodos] = useState([
    { text: "uyan", key: 1 },
    { text: "kahvaltı yap", key: 2 },
    { text: "işe git", key: 3 },
  ])

  const pressHandler = (id) => {
    setTodos((prevtodos) => {
      return prevtodos.filter(x => x.key != id);
    })
  }

  const submitHandler = (text) => {

    if (text.length > 3) {

      setTodos((prevtodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevtodos
        ]
      })
    } else {
      Alert.alert('Opps', 'Text must be over than 3 letters', [{ text: 'Understood', onPress: () => console.log('alert closed') }])
    }

  }

  return (
    <View style={styles.container}>

      <Header></Header>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />

        <View style={styles.list}>
          <FlatList data={todos} renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={pressHandler} />
          )} />
        </View>

      </View>
      {/* todo form */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
    // backgroundColor: '#12a12a',
    flex: 1
  },
  list: {
    marginTop: 20,
    // backgroundColor: '#789abc'
  }
});

export default App;
