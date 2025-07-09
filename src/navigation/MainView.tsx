import React from 'react'

import { Provider } from 'react-redux';
// @ts-ignore
import { PersistGate } from 'redux-persist/integration/react';
import { persistor,store } from '../redux/store';
import NavigationContainerComponent from './NavigationContainerComponent';
const MainView = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainerComponent />
      </PersistGate>
    </Provider>
  )
}

export default MainView