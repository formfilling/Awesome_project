import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const ColorAdjustment = ({ color, onIncrease, onDecrese, rd ,bl, grn }) => {
  
  // console.log(color)
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text>{color}</Text>
      {/* <Button
        title={`More ${color}`}
        onPress={onIncrease}
        // onPress={() => {
        //   setClr(clr + 1);
        // }}
        style={{
          height: 70,
          width: 70,
          marginLeft: 10,
        }}
      /> */}
      <TouchableOpacity
        onPress={onIncrease}
        style={{
          height: 70,
          width: 70,
          marginLeft: 20,
          marginBottom: 5,
          backgroundColor: '#42b3f5', // Example background color
        }}
      >
        <Text>More {color}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onDecrese}
        style={{
          height: 70,
          width: 70,
          marginLeft: 10,
          backgroundColor: '#42b3f5', // Example background color
        }}
      >
        <Text>Less {color}</Text>
      </TouchableOpacity>
      {/* <Button
        title={`Les ${color}`}
        onPress={onDecrese}
      /> */}
      
    </View>
  );
};

const styles = StyleSheet.create({});
export default ColorAdjustment;
