import React from 'react';
import {SafeAreaView} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import 'react-native-gesture-handler';
import {NativeBaseProvider} from 'native-base';
import {theme} from './src/style/theme';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#292929'}}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
export default App;
