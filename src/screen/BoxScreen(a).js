import React from "react";
import { View,Text,StyleSheet, Button  } from "react-native";

const BoxScreen = () => {
    return (
        <View style = {stylez.viewStyle}>
        <Text style = {stylez.textStyle}>Child #1</Text>
        <Text style = {stylez.textStyle}>Child #2</Text>
        <Text style = {stylez.textStyle}>Child #3</Text>
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
        flexDirection : "column",
        justifyContent : "space-around"


    },
    textStyle:{
        borderColor:"red",
        borderWidth:1,
        margin : 10,
        // flex : 1

        
        
    }
})
export default BoxScreen