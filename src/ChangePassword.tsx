import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { styles } from "./css/styles";
import { useDispatch, useSelector } from "react-redux";
import { createForm, getFields, isFormValid, validateForm } from "./Utils";
import { changePswdLabels, initialFields } from "./constants";
import { RootState } from "./redux/reducers/mainReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { updateUser } from "./redux/actions/userActions";
import { LinearGradient } from "expo-linear-gradient";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.data);
  const [form, setForm] = useState(createForm(changePswdLabels));
  const [wrongPasswordError, setWrongPasswordError] = useState("");

  const setField = ({ name, value }: any) => {
    setForm({
      ...form,
      [name]: { value, error: value ? "" : "Please enter a value." },
    });
  };

  const handleConfirm = async () => {
    const updatedForm = validateForm(form);
    const formValid = isFormValid(updatedForm);
    if (formValid) {
      const data = getFields(form);
      let storedUserData = (await AsyncStorage.getItem(
        user.mobileNumber
      )) as any;
      storedUserData = JSON.parse(storedUserData);
      if (data.currentPassword === storedUserData.password) {
        try {
          await AsyncStorage.setItem(
            user.mobileNumber,
            JSON.stringify({ ...storedUserData, password: data.newPassword })
          );
          Alert.alert(
            "Password Changed",
            "Your password has been successfully updated."
          );
        } catch (error) {
          console.log("Error in saving data to AsyncStorage -", error);
        }
        dispatch(updateUser(data));
      } else {
        setWrongPasswordError(
          "Please enter correct value of current password."
        );
      }
    } else {
      setForm(updatedForm);
      setWrongPasswordError("");
    }
  };
  const handleReset = () => {
    setForm(createForm(initialFields));
    setWrongPasswordError("");
  };
  return (
    <LinearGradient colors={["#c0c52a", "#639e30"]} style={{ height: "100%" }}>
      <View style={{ padding: 20 }}>
        <Text>Current Password</Text>
        <TextInput
          onChangeText={(value) => setField({ name: "currentPassword", value })}
          value={form.currentPassword && form.currentPassword.value}
          secureTextEntry
          placeholder="Enter current password"
          style={styles.inputStyle}
        />

        <Text>New Password</Text>
        <TextInput
          onChangeText={(value) => setField({ name: "newPassword", value })}
          value={form.newPassword && form.newPassword.value}
          secureTextEntry
          placeholder="Enter new password"
          style={styles.inputStyle}
        />
        <Text style={styles.error}>{wrongPasswordError}</Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
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

export default ChangePassword;
