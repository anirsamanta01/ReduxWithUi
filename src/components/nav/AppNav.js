import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../home/Home';
import AllNonVegItems from '../items/all_Items/AllNonVegItems';
import AllVeggesItems from '../items/all_Items/AllVeggesItems';
import Cart from '../cart/Cart';

const Stack = createNativeStackNavigator();

const AppNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="all-non-vegges-items"
          component={AllNonVegItems}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="all-vegges-items"
          component={AllVeggesItems}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="cart"
          component={Cart}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
