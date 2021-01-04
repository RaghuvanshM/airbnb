import React from 'react'
import 'react-native-gesture-handler';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import HomeScreenComponent from './src/screen/Home/index'
import PostComponent from './src/component/Post'
import SearchResultComponent from './src/screen/searchResult/index';
import DestinationCoponent from './src/screen/destinationsearch/destination';
import Guestcomponent from './src/screen/Guest/guest'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomComponent from './src/navigation/Tabnavigation/bottomtab'
const Stack = createStackNavigator();

const App = () => {
  return(
  <NavigationContainer>
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Screen
        name="destination"
        component={BottomComponent}
        options={{
          title: 'search for destination',
        }}
      />
       <Stack.Screen
        name="destinationserch"
        component={DestinationCoponent}
        options={{
          title: 'this header',
        }}
      />
        <Stack.Screen
        name="guest"
        component={Guestcomponent}
        options={{
          title: 'Number of people',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)
}
export default App