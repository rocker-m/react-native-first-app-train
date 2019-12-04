
import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

const Header = () => {

  

  return (
     <View style={styles.header}>
         <Text style={styles.title}>My Todos</Text>
     </View>
  );
};

const styles = StyleSheet.create({
  header:{
    height:80,
    paddingTop:30,
    backgroundColor:'coral'
  },
  title:{
      textAlign:'center',
      fontSize:20,
      color:'#fff',
      fontWeight:'bold',
      fontFamily:'Cochin'
  }
});

export default Header;
