import React from 'react';
import {SafeAreaView} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import 'react-native-gesture-handler';
import {NativeBaseProvider} from 'native-base';
function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: '#292929'}}>
        <AppNavigator />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
export default App;
