import React from "react";
import { Text,View, StyleSheet, Button } from "react-native";
//using useReduce
const reducer = (state,action) => {
switch (action.type) {
    case "increase":
        return {counter : state.counter + 1}
    case "decrease":
        return {counter : state.counter - 1}
    default:
        break;
}
}
const CounterScreen = ()=> {
    // const [counter, setCounter] = React.useState(0);
    const [state, dispach] = React.useReducer(reducer , {counter : 0})
    const {counter} = state;
    function counterPlus()
    {
        setCounter(counter + 1)
    }
    function counterMin()
    {
        setCounter(counter - 1)
    }
    return (
        <View>
            <Button 
            title="Counter ++"
            onPress={() => {dispach( {type:"increase"})}}
            />
            <Button 
            title="Counter --"
            onPress={() => {dispach( {type:"decrease"})}}
            />
            <Text>Counter {state.counter}</Text>
        </View>
    )
}

export default CounterScreen;