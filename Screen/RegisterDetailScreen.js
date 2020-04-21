import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,ScrollView
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import recapcha from "../assets/recapcha.png";

export default class RegisterDetailScreen extends Component {
  state = {
    value: "",
    text: "",
    emailplace: "youremail@domain.com",
    passwordplace: "Enter your password",
    passwordagain: "Enter your password again",
    checked: true,
    email: "",
    password: "",
    repassword: "",
  };

  render() {
    const {
      emailplace,
      passwordplace,
      passwordagain,
      checked,
      email,
      password,
      repassword,
    } = this.state;
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container} >
         <ScrollView>
           <View >
        <Text style={styles.textBold}> Fill in your details: </Text>
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
        <Text style={{ marginVertical: 10 }}>
          8-16 characters with at least 1 lower, 1 uppercase, digit number, and
          symbol except for ambigous characters (e.g.[]()\/`*-~;:.)
        </Text>
        <Text style={{ fontSize: 16 }}>Confirm Password</Text>
        <TextInput
          placeholder={passwordagain}
          style={styles.textInput}
          onChangeText={(repassword) => this.setState({ repassword })}
          value={repassword}
        />
        <View style={styles.viewCapcha}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CheckBox
              style={{ marginLeft: 10 }}
              value={checked}
              disabled={false}
              onValueChange={() => this.setState({ checked: !checked })}
            />
            <Text style={{ color: "#000", fontSize: 16, marginLeft: 10 }}>
              I'm not a robot
            </Text>
          </View>
          <Image
            source={recapcha}
            style={{ width: 40, height: 40, alignSelf: "flex-end", margin: 10 }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={styles.btnlogin}
        >
          <Text style={{ fontSize: 20, color: "#fff", textAlign: "center" }}>
            Next
          </Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
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
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
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
    marginTop: 100,
  },
  viewCapcha: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    backgroundColor: "#FAFAFA",
    borderColor: "#E4E4E4",
    borderRadius: 7,
    marginTop: 20,
  },
});
