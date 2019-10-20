/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import AppNavigator from './Source/AppStack/AppStack';
import thunk from 'redux-thunk';
import CombineReducer from './Source/Reducers/CombineReducer';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from "redux-logger";


const store = createStore(CombineReducer,applyMiddleware(thunk,logger));



const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex:1}}>
      <AppNavigator/>
      </SafeAreaView>
      </Provider>
  );
};



export default App;
