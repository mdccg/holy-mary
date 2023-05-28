import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ height: getStatusBarHeight() }} />
      <Text>Conteudo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
