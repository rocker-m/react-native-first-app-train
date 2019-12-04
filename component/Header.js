
import React, {useState} from 'react';
import {StyleSheet,View,Text, FlatList} from 'react-native';

const App = () => {

  const [todos, setTodos] = useState([
    {text:"uyan",key:1},
    {text:"kahvaltı yap",key:2},
    {text:"işe git",key:3},
  ])

  return (
     <View style={styles.container}>

       {/* header */}
      <View style={styles.content}>

      <View style={styles.list}>
        <FlatList  data={todos} renderItem={({item})=>(
          <Text>{item.text}</Text>
        )} />
        </View>

      </View>
       {/* todo form */}
       <Text>hiii</Text>


     </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff222'
  },
  content:{
    padding:40,
    backgroundColor:'#12a12a',
    flex:1
  },
  list:{
    marginTop:20,
    backgroundColor:'#789abc'
  }
});

export default App;
