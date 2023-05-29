import { NavigationContainer } from '@react-navigation/native';
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './../screens/Menu';
import WelcomeScreen from './../screens/Welcome';

export type RootStackParamList = {
  Welcome: undefined;
  Menu: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();
const screenOptions: StackNavigationOptions = { header: () => <></> };

const routes = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default routes;