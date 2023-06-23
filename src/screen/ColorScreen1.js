import React from "react";
import { View,Button,StyleSheet,FlatList } from "react-native";

const ColorScreen = () => {
    const [color , setColor] = React.useState([]);

    const randomRGB = () =>
    {
        const red = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        return `rgb(${red}, ${blue}, ${green})`
    }
    return (
        <View>
            <Button title="Add Color"
            onPress={()=>{
                setColor([...color , randomRGB()]);
            }}
            />
            
            <FlatList
            keyExtractor={(item)=>item}
            data={color}
            renderItem={({item})=>{
                return <View style = {{height:100, width: 100, alignContent:"center" ,backgroundColor:item}} />
            }}
            />
        </View>
    )
}

const style = StyleSheet.create({})

export default ColorScreen;