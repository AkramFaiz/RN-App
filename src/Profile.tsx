import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { styles } from "./css/styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/reducers/mainReducer";
import { createForm, getFields, isFormValid, validateForm } from "./Utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { updateUser } from "./redux/actions/userActions";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.data);
  const [form, setForm] = useState(createForm(user));
  const setField = ({ name, value }: any) => {
    setForm({
      ...form,
      [name]: { value, error: value ? "" : "Please enter a value." },
    });
  };

  const handleReset = () => {
    setForm(createForm(user));
  };

  const handleConfirm = async () => {
    const updatedForm = validateForm(form);
    const formValid = isFormValid(updatedForm);
    if (formValid) {
      const data = getFields(form);
      let storedUserData = await AsyncStorage.getItem(user.mobileNumber);
      storedUserData = JSON.parse(storedUserData as any);
      try {
        await AsyncStorage.setItem(
          data.mobileNumber,
          JSON.stringify({ ...(storedUserData as any), ...data })
        );
        Alert.alert(
          "Profile Changed",
          "Your profile has been successfully updated."
        );
      } catch (error) {
        console.log("Error in saving data to AsyncStorage -", error);
      }
      dispatch(updateUser(data));
    } else {
      setForm(updatedForm);
    }
  };

  return (
    <LinearGradient colors={["#c0c52a", "#639e30"]} style={{ height: "100%" }}>
      <View style={{ padding: 20 }}>
        <Text>Username</Text>
        <TextInput
          onChangeText={(value) => setField({ name: "name", value })}
          value={form.name && form.name.value}
          style={styles.inputStyle}
        />

        <Text>Email (Non-Editable)</Text>
        <TextInput
          value={form.email && form.email.value}
          editable={false}
          style={[styles.inputStyle, { color: "#61615e" }]}
        />

        <Text>Phone Number</Text>
        <TextInput
          onChangeText={(value) => setField({ name: "mobileNumber", value })}
          value={form.mobileNumber && form.mobileNumber.value}
          keyboardType="phone-pad"
          keyboardAppearance="dark"
          placeholder="Enter phone number"
          style={styles.inputStyle}
        />

        <Text>City</Text>
        <TextInput
          onChangeText={(value) => setField({ name: "city", value })}
          value={form.city && form.city.value}
          style={styles.inputStyle}
        />

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            gap: 10,
            borderRadius: 5,
          }}
        >
          <Button title="Confirm" onPress={handleConfirm} />
          <Button title="Reset" onPress={handleReset} color="red" />
        </View>
      </View>
    </LinearGradient>
  );
};

export default ProfileScreen;
