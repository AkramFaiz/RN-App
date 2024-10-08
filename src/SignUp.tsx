import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  ImageBackground,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { styles } from "./css/styles";
import { useNavigation } from "@react-navigation/native";

import { signUpInitialFields } from "./constants";
import { createForm, getFields, isFormValid, validateForm } from "./Utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUp = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState(createForm(signUpInitialFields));
  const setField = ({ name, value }: any) => {
    setForm({
      ...form,
      [name]: { value, error: value ? "" : "Please enter a value." },
    });
  };
  const handleSignUp = async () => {
    const updatedForm = validateForm(form);
    const formValid = isFormValid(updatedForm);
    if (formValid) {
      const data = getFields(form);
      delete data.confirmPassword;
      try {
        await AsyncStorage.setItem(data.mobileNumber, JSON.stringify(data));
        Alert.alert("Sign Up Successful", "Your account has been created.");
        navigation.navigate("Login");
      } catch (error) {
        console.log("Error in saving data to AsyncStorage -", error);
      }
    } else {
      setForm(updatedForm);
    }
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const ImgPath = "./../assets/mba.jpg";

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <ImageBackground source={require(ImgPath)} style={styles.image}>
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
                SignUp to MBA
              </Text>

              <Text style={styles.textWhite}>Username:</Text>
              <TextInput
                style={[
                  styles.inputStyle,
                  styles.normalText,
                  styles.textWhite,
                  {
                    marginBottom: 5,
                  },
                ]}
                placeholder="Username"
                placeholderTextColor="grey"
                onChangeText={(value) => setField({ name: "name", value })}
                value={form.name && form.name.value}
              />

              <Text style={styles.textWhite}>Email:</Text>
              <TextInput
                style={[
                  styles.inputStyle,
                  styles.normalText,
                  styles.textWhite,
                  {
                    marginBottom: 5,
                  },
                ]}
                placeholder="Email"
                placeholderTextColor="grey"
                onChangeText={(value) => setField({ name: "email", value })}
                value={form.email && form.email.value}
              />

              <Text style={styles.textWhite}>Password:</Text>
              <TextInput
                style={[
                  styles.inputStyle,
                  styles.normalText,
                  styles.textWhite,
                  {
                    marginBottom: 5,
                  },
                ]}
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="grey"
                onChangeText={(value) => setField({ name: "password", value })}
                value={form.password && form.password.value}
              />

              <Text style={styles.textWhite}>Confirm Password:</Text>
              <TextInput
                style={[
                  styles.inputStyle,
                  styles.normalText,
                  styles.textWhite,
                  {
                    marginBottom: 5,
                  },
                ]}
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="grey"
                onChangeText={(value) =>
                  setField({ name: "confirmPassword", value })
                }
                value={form.confirmPassword && form.confirmPassword.value}
              />

              <Text style={styles.textWhite}>City:</Text>
              <TextInput
                style={[
                  styles.inputStyle,
                  styles.normalText,
                  styles.textWhite,
                  {
                    marginBottom: 5,
                  },
                ]}
                placeholder="City"
                placeholderTextColor="grey"
                onChangeText={(value) => setField({ name: "city", value })}
                value={form.city && form.city.value}
              />

              <Text style={styles.textWhite}>Phone:</Text>
              <TextInput
                style={[
                  styles.inputStyle,
                  styles.normalText,
                  styles.textWhite,
                  {
                    marginBottom: 20,
                  },
                ]}
                placeholder="Phone Number"
                placeholderTextColor="grey"
                onChangeText={(value) =>
                  setField({ name: "mobileNumber", value })
                }
                value={form.mobileNumber && form.mobileNumber.value}
              />
              <Button title="Sign Up" onPress={handleSignUp} />
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.textWhite}>Already have an account? </Text>
                <Button color="#0000ff" title="Login" onPress={handleLogin} />
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
