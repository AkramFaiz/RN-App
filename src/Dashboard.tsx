import React, { useEffect } from "react";
import { View, Text, Alert, Button, ActivityIndicator } from "react-native";
import MoviesScreen from "./Movies";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const Dashboard = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Button
            title="Settings"
            onPress={() => navigation.navigate("Settings")}
          />
          <Button title="Logout" onPress={handleLogout} />
        </View>
      ),
    });
  }, [navigation]);

  const handleLogout = () => {
    Alert.alert("Logout", "You have been logged out.");
    navigation.navigate("Login");
  };
  return (
    <LinearGradient colors={["#c0c52a", "#639e30"]} style={{ height: "100%" }}>
      <View style={{ padding: 20 }}>
        <MoviesScreen />
      </View>
    </LinearGradient>
  );
};

export default Dashboard;
