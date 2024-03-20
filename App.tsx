import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen.js';
import SignupScreen from './components/SignupScreen.js';
import WelcomeScreen from './components/WelcomeScreen.js';
import HomeScreen from './components/HomeScreen.js';
import Plate from './components/Plate.js';
import PlateDetails from "./components/PlateDetails.js";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={ HomeScreen }
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Log in"
          component={ LoginScreen }
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Sign up"
          component={ SignupScreen }
          options={{
            headerTitle: "Register",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={ WelcomeScreen }
          options={{
            headerTitle: "Profile",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Plate"
          component={ Plate }
          options={{
            headerTitle: "Enter Plate",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="PlateDetails"
          component={ PlateDetails }
          options={{
            headerTitle: "Plate details",
            headerShown: true,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;