import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './MainPage';
import MyAccount from './MyAccount';
import Help from './Help';
import UserInfo from './UserInfo';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage" headerMode="none">
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="MyAccount" component={MyAccount} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
