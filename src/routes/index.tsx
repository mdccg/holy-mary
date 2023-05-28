import { NavigationContainer } from '@react-navigation/native';
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './../screens/Welcome';

type RootStackParamList = {
  Welcome: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();
const screenOptions: StackNavigationOptions = { header: () => <></> };

const routes = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default routes;