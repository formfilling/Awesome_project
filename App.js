import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screen/HomeScreen";
import CounterScreen from "./src/screen/CounterScreen";
import ColorScreen from "./src/screen/ColorScreen1";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    // Component: ComponentScreen,
    // List: ListScreen,
    // Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
