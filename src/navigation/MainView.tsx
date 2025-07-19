import React from 'react'


import NavigationContainerComponent from './NavigationContainerComponent';
import { UserProvider } from '../ayncStorage/UserContext';



const MainView = () => {
  return (
    <UserProvider>
      <NavigationContainerComponent />
    </UserProvider>
  )
}

export default MainView