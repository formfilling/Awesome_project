import React from "react";
import { View,Text,StyleSheet, Button  } from "react-native";

const BoxScreen = () => {
    console.log("hello")
    return (
        <View style = {stylez.viewStyle}>
        <Text style = {stylez.textOneStyle}>Child #1</Text>
        <Text style = {stylez.textTwoStyle}>Child #2</Text>
        <Text style = {stylez.textThreeStyle}>Child #3</Text>
        </View>
    )
}
//FlexBox Parent Styling:
//alignItems
//flexDirection
//justifyContent
//FlexBox Child Styling:
//flex 
//alignself

//Another Styling Property
//Position
//top ,left, bottom, right
const stylez = StyleSheet.create({
    viewStyle:{
        borderColor:"black",
        borderWidth:7,
        // alignItems: "center",
        flexDirection : "row",
        justifyContent : "space-between",
        height:400,


    },
    textOneStyle:{
        borderColor:"red",
        borderWidth:1,
        margin : 10,
        height:70,
        width:70,
        backgroundColor:"red"
        // flex : 1
    },
    textTwoStyle:{
        borderColor:"red",
        borderWidth:1,
        margin : 10,
        height:70,
        width:70,
        top : 80,
        backgroundColor:"orange"
        // flex : 1
    },
    textThreeStyle:{
        borderColor:"red",
        borderWidth:1,
        margin : 10,
        height:70,
        width:70,
        backgroundColor:"yellow"
        // flex : 1
    }
})
export default BoxScreen