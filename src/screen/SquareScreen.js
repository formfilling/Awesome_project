import React from "react";
// import Red from "../component/Red";
import ColorAdjustment from "../component/ColorAdjustment";

import { View, StyleSheet } from "react-native";

const SquareScreen = () => {
    const [red, setRed] = React.useState(127)
    console.log(red);
  return (
    <View>
      <ColorAdjustment redrgb={red} colorTyp={"Red"} />
    </View>
  );
};

const styles = StyleSheet.create({});
export default SquareScreen;
