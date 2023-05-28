import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './../screens/Welcome';

type RootStackParamList = {
  Welcome: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default routes;