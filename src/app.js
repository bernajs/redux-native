/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducers from './reducers'

import SuperHeroesList from './components/super-heroes-list'

const App = () => (
  <Provider store={createStore(Reducers)}>
    <View>
      <SuperHeroesList></SuperHeroesList>
    </View>
  </Provider>
)

export default App
