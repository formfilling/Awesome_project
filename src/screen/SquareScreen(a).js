import React from "react";
// import Red from "../component/Red";
import ColorAdjustment from "../component/ColorAdjustment";

import { View, StyleSheet, Text } from "react-native";

const COUNTER_COLOR = 5;
const SquareScreen = () => {
  const [red, setRed] = React.useState(127);
  const [blue, setBlue] = React.useState(127);
  const [green, setGreen] = React.useState(127);

  const setColor = (colour, change) => {
    //colour === 'red', 'blue', 'green'
    //change === '+5','-5' etc etc
    // console.log("red");

    if (colour === "red") {
      red + change > 255 || red + change < 0 ? null : setRed(red + change)
      // if (red + change > 255 || red + change < 0) {
      //   return;
      // }
      // else {
      //   setRed(red + change);
      // }
    }
    else if (colour === "blue") {
      blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
      
    }
    else if (colour === "green") {
      green + change > 255 || green + change < 0 ? null : setGreen(green + change)
      
    }


  };



  // const [red, setRed] = React.useState(127)

  console.log("RED " + red);
  console.log("BLUE " +blue);
  console.log("GREEN " + green);
  return (
    <View >
      <ColorAdjustment
        color="Red"
        onIncrease={() => { setColor('red', COUNTER_COLOR) }}
        onDecrese={() => { setColor('red', -1 * COUNTER_COLOR) }}
        rd={red}
      />
      <View style={{
        height: 30,
        width: 100,
        backgroundColor: `rgb(${red}, ${0}, ${0})`,
        marginLeft: 50,
        marginBottom: 20
      }}></View>
      <ColorAdjustment
        color="Blue"
        onIncrease={() => { setColor('blue', COUNTER_COLOR) }}
        onDecrese={() => { setColor('blue', -1 * COUNTER_COLOR) }}
        bl={blue}
      />
      <View style={{
        height: 30,
        width: 100,
        backgroundColor: `rgb(${0}, ${0}, ${blue})`,
        marginLeft: 50,
        marginBottom: 20
      }}></View>
      <ColorAdjustment 
        color="Green"
        onIncrease={() => { setColor('green', COUNTER_COLOR) }}
        onDecrese={() => { setColor('green', -1 * COUNTER_COLOR) }}
        grn={green}
      />
      <View style={{
        height: 30,
        width: 100,
        backgroundColor: `rgb(${0}, ${green}, ${0})`,
        marginLeft: 50,
        marginBottom: 20
      }}></View>

      <View style={{
        height: 100,
        width: 100,
        backgroundColor: `rgb(${red},${blue},${green})`,
        marginLeft: 160,
      }}></View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SquareScreen;
