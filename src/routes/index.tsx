import { NavigationContainer } from '@react-navigation/native';
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack';
import BookSelectorScreen from './../screens/BookSelector';
import BookmarksScreen from './../screens/Bookmarks';
import MeetTheTeamScreen from './../screens/MeetTheTeam';
import MenuScreen from './../screens/Menu';
import TranslationsScreen from './../screens/Translations';
import WelcomeScreen from './../screens/Welcome';
import ChapterSelectorScreen from './../screens/ChapterSelector';
import BookDTO from './../data-transports/BookDTO';
import LectureScreen from '../screens/Lecture';

export type RootStackParamList = {
  Welcome: undefined;
  Menu: undefined;
  BookSelector: undefined;
  ChapterSelector: {
    book: BookDTO;
  };
  Lecture: {
    book: BookDTO;
    chapter: number;
  };
  Bookmarks: undefined;
  Translations: undefined;
  MeetTheTeam: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();
const screenOptions: StackNavigationOptions = { header: () => <></> };

const routes = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="BookSelector" component={BookSelectorScreen} />
      <Stack.Screen name="ChapterSelector" component={ChapterSelectorScreen} />
      <Stack.Screen name="Lecture" component={LectureScreen} />
      <Stack.Screen name="Bookmarks" component={BookmarksScreen} />
      <Stack.Screen name="Translations" component={TranslationsScreen} />
      <Stack.Screen name="MeetTheTeam" component={MeetTheTeamScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default routes;