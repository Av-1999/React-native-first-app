import { StyleSheet, View, Text} from 'react-native';
import ToDo from './containers/Todo';
import { gStyles } from './gStyles';
import * as Font from 'expo-font'
import { useState } from 'react';

const fonts = () => Font.loadAsync({
  'mt=bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'mt=light': require('./assets/fonts/Montserrat-Light.ttf'),
  'mt=medium': require('./assets/fonts/Montserrat-Medium.ttf')
})

export default function App() {
  // const [font, setFont] = useState(false);

  // if (!font) return <AppLoading startAsync={fonts} onFinish={() => setFont(true)} />

  return (
    <View style={gStyles.main}>
      <Text style={gStyles.title}>AASDA SADK AS DKASJ </Text>
      {/* <ToDo /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})