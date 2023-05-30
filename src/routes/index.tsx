import { NavigationContainer } from '@react-navigation/native';
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack';
import BookSelectionScreen from './../screens/BookSelection';
import BookmarksScreen from './../screens/Bookmarks';
import MeetTheTeamScreen from './../screens/MeetTheTeam';
import MenuScreen from './../screens/Menu';
import TranslationsScreen from './../screens/Translations';
import WelcomeScreen from './../screens/Welcome';
import ChapterSelectorScreen from './../screens/ChapterSelector';

export type RootStackParamList = {
  Welcome: undefined;
  Menu: undefined;
  BookSelection: undefined;
  Bookmarks: undefined;
  Translations: undefined;
  MeetTheTeam: undefined;
  ChapterSelector: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();
const screenOptions: StackNavigationOptions = { header: () => <></> };

const routes = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="BookSelection" component={BookSelectionScreen} />
      <Stack.Screen name="Bookmarks" component={BookmarksScreen} />
      <Stack.Screen name="Translations" component={TranslationsScreen} />
      <Stack.Screen name="MeetTheTeam" component={MeetTheTeamScreen} />
      <Stack.Screen name="ChapterSelector" component={ChapterSelectorScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default routes;