import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Red = (props) => {
  const [clr, setClr] = React.useState(props.redrgb);

//   console.log(clr)
  return (
    <View>
      <Text>Red</Text>
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
export default Red;
