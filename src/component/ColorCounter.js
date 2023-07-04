import React from "react";
import { View, Text, StyleSheet, Button,TouchableOpacity } from "react-native";

const ColorAdjustment = ({ color, onIncrease, onDecrese }) => {
  //   console.log(clr)
  return (
    <View>
      <Text>{color}</Text>
      <Button
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
      />
      <Button
        title={`Les ${color}`}
        onPress={onDecrese}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default ColorAdjustment;
