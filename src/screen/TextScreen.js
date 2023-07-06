import React from "react";
import { View, Text, StyleSheet,TextInput } from "react-native";

const TextScreen = ()=>
{
    const [name , setName] = React.useState('');
    const [pwd, setPWD] = React.useState('');
    return (
        <View>
        <Text>Enter Name</Text>
        <TextInput 
        style = {stylez.input} 
        autoCapitalize="none"
        autoCorrect={false}
        value= {name}
        onChangeText={(setNewValue) => {setName(setNewValue)}}   
        />
        <Text>Enter Password</Text>
        <TextInput 
         style = {stylez.input}
         autoCapitalize="none"
         autoCorrect={false}
         value={pwd}
         onChangeText={(setPassword) => {setPWD(setPassword)}}
        />
        {pwd.length < 5 ? <Text>Please enter with 5 or more digit</Text> : null}
        </View>
    )
}

const stylez =  StyleSheet.create({
    input : {
        margin : 15,
        borderColor : "black",
        borderWidth : 2
    }
})
export default TextScreen;