import React from "react";
import ColorAdjustment from "../component/ColorAdjustment";

import { View, StyleSheet, Text } from "react-native";

const COUNTER_COLOR = 5;

const reducer = (state , action) => {
  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0 ?
      state :
      { ...state , red : state.red + action.amount};
    case "green":
      if(state.green + action.amount > 255 || state.green + action.amount < 0){
        return state;
      }
      return { ...state , green : state.green + action.amount}  
    case "blue":
      if(state.blue + action.amount > 255 || state.blue + action.amount < 0){
        return state;
      }
      return { ...state , blue : state.blue + action.amount}    
    default:
      return state;
  }
}
const SquareScreen = () => {
  
  const [state , dispach] = React.useReducer(reducer , {red : 127, green : 127, blue : 127});
  const { red, green, blue } = state;
  console.log(state.red +" red")
  console.log(state.green +" green")
  console.log(state.blue +" blue")
  return (
    <View >
      <ColorAdjustment
        color="Red"
        onIncrease={() => {dispach( {colorToChange : "red" , amount : COUNTER_COLOR}) }}
        onDecrese={() => {dispach( {colorToChange : "red" , amount : -1 * COUNTER_COLOR})  }}
        rd={red}
      />
      <View style={{
        height: 30,
        width: 100,
        backgroundColor: `rgb(${state.red}, ${0}, ${0})`,
        marginLeft: 50,
        marginBottom: 20
      }}></View>
      <ColorAdjustment
        color="Blue"
        onIncrease={() => {dispach({colorToChange : "blue" , amount : COUNTER_COLOR}) }}
        onDecrese={() => {dispach({colorToChange : "blue" , amount : -1 * COUNTER_COLOR})  }}
        bl={blue}
      />
      <View style={{
        height: 30,
        width: 100,
        backgroundColor: `rgb(${0}, ${0}, ${state.blue})`,
        marginLeft: 50,
        marginBottom: 20
      }}></View>
      <ColorAdjustment 
        color="Green"
        onIncrease={() => {dispach({colorToChange : "green" , amount : COUNTER_COLOR}) }}
        onDecrese={() => {dispach({colorToChange : "green" , amount : -1 * COUNTER_COLOR})  }}
        grn={green}
      />
      <View style={{
        height: 30,
        width: 100,
        backgroundColor: `rgb(${0}, ${state.green}, ${0})`,
        marginLeft: 50,
        marginBottom: 20
      }}></View>

      <View style={{
        height: 100,
        width: 100,
        backgroundColor: `rgb(${state.red},${state.blue},${state.green})`,
        marginLeft: 160,
      }}></View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SquareScreen;
