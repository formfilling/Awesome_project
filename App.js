import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screen/HomeScreen";
import CounterScreen from "./src/screen/CounterScreen";
import ColorScreen from "./src/screen/ColorScreen1";
import SquareScreen from "./src/screen/SquareScreen";
import TextScreen from "./src/screen/TextScreen";
import BoxScreen from "./src/screen/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    // Component: ComponentScreen,
    // List: ListScreen,
    // Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text : TextScreen,
    Box : BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
