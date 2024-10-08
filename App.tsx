import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

import SignIn from "./src/SignIn";
import SignUp from "./src/SignUp";
import Dashboard from "./src/Dashboard";

import Settings from "./src/Settings";
import { SafeAreaProvider } from "react-native-safe-area-context";
import store from "./src/redux/store";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SignIn">
              <Stack.Screen name="Login" component={SignIn} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
