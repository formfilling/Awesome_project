import React from "react";
import { View,Text,StyleSheet, Button  } from "react-native";

const BoxScreen = () => {
    return (
        <View style = {stylez.viewStyle}>
        <Text style = {stylez.textStyle}>Hello</Text>
        </View>
    )
}

const stylez = StyleSheet.create({
    viewStyle:{
        borderColor:"black",
        borderWidth:7
    },
    textStyle:{
        borderColor:"red",
        borderWidth:1,
        margin : 10
    }
})
export default BoxScreen