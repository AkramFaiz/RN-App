import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  ImageBackground,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./css/styles";
import { initialFields } from "./constants";
import { useDispatch } from "react-redux";
import { createForm, getFields, isFormValid, validateForm } from "./Utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUser } from "./redux/actions/userActions";

const SignIn = () => {
  // navigation 
  const navigation = useNavigation();
  // Dispatch
  const dispatch = useDispatch();

  const [form, setForm] = useState(createForm(initialFields));
  const [error, setError] = useState("");
  const setField = ({ name, value }: any) => {
    setForm({
      ...form,
      [name]: { value, error: value ? "" : "Please enter a value." },
    });
  };
  const clearFields = () => {
    setForm(createForm(initialFields));
    setError("");
  };

  const handleSignIn = async () => {
    // Validate email and password 
    const updatedForm = validateForm(form);
    const formValid = isFormValid(updatedForm);
    if (formValid) {
      const formData = getFields(form);
      const user = await AsyncStorage.getItem(formData.mobileNumber);
      if (user) {
        const parsedUserData = JSON.parse(user);
        if (parsedUserData.password === formData.password) {
          delete parsedUserData.password;
          dispatch(setUser(parsedUserData));
          // If credentials are correct, navigate to Dashboard screen
          navigation.navigate("Dashboard");
        } else {
          Alert.alert("Invalid Credentials", "Password is incorrect.");
        }
      } else {
        Alert.alert("Invalid Credentials", "Phone number is incorrect");
      }
    } else {
      setForm(updatedForm);
      setError("");
    }
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  const ImgPath = "./../assets/mba.jpg";

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(ImgPath)}
        style={[styles.image, { height: "100%" }]}
      >
        <View
          style={{
            margin: 50,
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: 20,
          }}
        >
          <Text
            style={[
              styles.largeText,
              styles.textWhite,
              { textAlign: "center", marginBottom: 20 },
            ]}
          >
            Welcome to MBA
          </Text>
          <Text style={styles.textWhite}>Phone Number:</Text>
          <TextInput
            style={[
              styles.inputStyle,
              styles.normalText,
              styles.textWhite,
              {
                marginBottom: 5,
              },
            ]}
            placeholder="Phone Number"
            placeholderTextColor="grey"
            onChangeText={(value: any) =>
              setField({ name: "mobileNumber", value })
            }
            value={form.mobileNumber && form.mobileNumber.value}
          />
          <Text style={{ color: "red" }}>
            {form.mobileNumber && form.mobileNumber.error}
          </Text>

          <Text style={styles.textWhite}>Password:</Text>
          <TextInput
            style={[styles.inputStyle, styles.normalText, styles.textWhite]}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="grey"
            onChangeText={(value: any) => setField({ name: "password", value })}
            value={form.password && form.password.value}
          />
          <Text style={{ color: "red" }}>
            {form.password && form.password.error}
          </Text>
          <View style={{ marginTop: 10 }}>
            <Button title="Sign In" onPress={handleSignIn} />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.textWhite}>Don't have an account? </Text>
            <Button color="#0000ff" title="Sign Up" onPress={handleSignUp} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignIn;
