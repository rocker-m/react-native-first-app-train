
import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';


const AddTodo = ({submitHandler}) => {
    const [text, setText] = useState("");

    const changeHandler = (val) => {
        setText(val);
    }
    return (
        <View>
            <TextInput style={styles.item} placeholder="new todo" onChangeText={changeHandler} />
            <Button title="Add ToDo" onPress={()=>submitHandler(text)} color='coral' />
        </View>

    )
};
const styles = StyleSheet.create({
    item: {
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})
export default AddTodo;