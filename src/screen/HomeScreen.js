import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


// const HomeScreen = (props) => {
  const HomeScreen = ({navigation}) => {// we did destructring here of objects
  //otherwise we had to use probs.navigation.navigate
  return ( <View > 
  <Text style={styles.text}>Hello</Text>
   
   <Button 
    title="Counter Section"
    onPress={()=>{navigation.navigate('Counter')}}
   />
   <Button 
    title="Color Section"
    onPress={()=>{navigation.navigate('Color')}}
   />
   <Button 
    title="Square Screen Section"
    onPress={()=>{navigation.navigate('Square')}}
   />
   <Button 
    title="Text Screen Section"
    onPress={() => {navigation.navigate('Text')}}
   />
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
    // marginTop:20
  },
  btn:{
    paddingBottom:20,
    fontSize: 30
  }
});
console.log("---------")
export default HomeScreen;
