
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import GalleryNavigator from './src/navigation/GalleryNavigator';

export default function App() {
  return (
    <NavigationContainer>
    <GalleryNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
