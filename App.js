import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './components/Main';
import List from './components/List';
import Map from './components/Map';

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="List"
          component={List}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{
            headerStyle: {
              backgroundColor: '#4361EE',
            },
            headerTintColor: '#d8f3dc',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
