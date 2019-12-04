
import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Header from './component/Header';
import TodoItem from './component/TodoItem';
const App = () => {

  const [todos, setTodos] = useState([
    { text: "uyan", key: 1 },
    { text: "kahvaltı yap", key: 2 },
    { text: "işe git", key: 3 },
  ])
  
  const pressHandler =(id)=>{
    setTodos((prevtodos)=>{
      return prevtodos.filter(x=>x.key!=id);
    })
  }
  return (
    <View style={styles.container}>

      <Header></Header>
      <View style={styles.content}>

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
