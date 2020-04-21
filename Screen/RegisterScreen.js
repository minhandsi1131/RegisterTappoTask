import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import logo from "../assets/logo.png";
import "react-native-gesture-handler";
export default class RegisterScreen extends Component {
  state = {
    value: "",
    text: "",
    emailplace: "youremail@domain.com",
    passwordplace: "Enter your password",
    email: "",
    password: "",
  };

  render() {
    const { emailplace, passwordplace, email, password } = this.state;
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={logo}
          style={{ width: 191, height: 59, alignSelf: "center" }}
        />
        <Text style={styles.textBold}>Merchain</Text>
        <Text style={styles.textSub}>
          Welcome back, please log in to your account
        </Text>
        <View>
          <Text style={styles.textTitleInput}>Email</Text>
          <TextInput
            placeholder={emailplace}
            style={styles.textInput}
            onChangeText={(email) => this.setState({ email })}
            value={email}
          />
        </View>
        <View>
          <Text style={styles.textTitleInput}>Password</Text>
          <TextInput
            placeholder={passwordplace}
            style={styles.textInput}
            onChangeText={(password) => this.setState({ password })}
            value={password}
          />
        </View>
        <Text style={styles.textForgotpw}>Forgot your password?</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("RegisterDetails", { name: "RegisterDetail" })
          }
          style={styles.btnlogin}
        >
          <Text style={{ fontSize: 20, color: "#fff", textAlign: "center" }}>
            Log in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("RegisterDetails", { name: "RegisterDetail" })
          }
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              marginTop: 90,
            }}
          >
            <Text style={{ color: "gray" }}>Not on Tappo yet? </Text>
            <Text style={{ fontWeight: "bold", color: "#2FD059" }}>
              Register
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  textBold: {
    fontSize: 40,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
  textSub: {
    fontSize: 16,
    textAlign: "center",
    color: "#707070",
    marginVertical: 15,
  },
  textTitleInput: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
  },
  textForgotpw: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    marginVertical: 10,
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderBottomWidth: 1,
    borderBottomColor: "#CECCCC",
  },
  btnlogin: {
    backgroundColor: "#2FD059",
    borderRadius: 7,
    paddingHorizontal: 80,
    paddingVertical: 8,
    marginVertical: 30,
  },
});
