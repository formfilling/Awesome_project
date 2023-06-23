import React from "react";
import { Text,View, StyleSheet, Button } from "react-native";

const CounterScreen = ()=> {
    const [counter, setCounter] = React.useState(0);
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
            onPress={counterPlus}
            />
            <Button 
            title="Counter --"
            onPress={counterMin}
            />
            <Text>Counter {counter}</Text>
        </View>
    )
}

export default CounterScreen;