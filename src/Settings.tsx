import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Profile from "./Profile";
import ChangePassword from "./ChangePassword";

const Tab = createMaterialTopTabNavigator();

const Settings = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Change Password" component={ChangePassword} />
    </Tab.Navigator>
  );
};

export default Settings;
