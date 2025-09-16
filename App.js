import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Screens
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import SelectAccountScreen from './src/screens/SelectAccountScreen';
import RegisterScreen from './src/screens/SignUpScreen';

import { default as HomeScreen } from './src/screens/HomeScreen';
import InventoryScreen from './src/screens/InventoryScreen';
import ProfileScreen from './src/screens/PorfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator de la tienda
function StoreTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Inventario') iconName = 'list';
          else if (route.name === 'Perfil') iconName = 'person';
          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#9A0C1A',
        tabBarInactiveTintColor: '#6D747C',
        tabBarStyle: { backgroundColor: '#B0B1B5' },
      })}
    >
      <Tab.Screen name="Home" component= {HomeScreen}/>
      <Tab.Screen name="Inventario" component={InventoryScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// Stack principal
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SelectAccount" component={SelectAccountScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Store" component={StoreTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
