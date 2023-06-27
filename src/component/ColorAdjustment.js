import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorAdjustment = (props) => {
  const [clr, setClr] = React.useState(props.redrgb);

//   console.log(clr)
  return (

    <View>
      <Text>{props.colorTyp === "Red" || props.colorTyp === "red" ? props.colorTyp : null}</Text>
      <Button
        title="More Red"
        onPress={() => {
          setClr(clr + 1);
        }}
      />
      <Button
        title="Les Red"
        onPress={() => {
          setClr(clr - 1);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default ColorAdjustment;
