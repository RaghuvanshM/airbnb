import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import DestinationCoponent from '../screen/destinationsearch/destination'
const Router = (props) => {
  
    return (
        <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Home"
        headerMode="screen"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={DestinationCoponent}
          options={{
            title: 'Awesome app',
          }}
        />
        </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Router;