import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
//UI PHOTO
import logo from "../../assets/logo.png";
import { styles } from "../styles";
//UI PHOTO
export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      text: "",
      emailplace: "youremail@domain.com",
      passwordplace: "Enter your password",
      email: "",
      password: "",
    };
  }
  render() {
    const { emailplace, passwordplace, email, password } = this.state;
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.topContainer}>
            <Image
              source={logo}
              style={{
                width: 191,
                height: 59,
                alignSelf: "center",
                marginTop: 70,
              }}
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
            <View style={styles.editPassword}>
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
                navigation.navigate("RegisterDetails", {
                  name: "RegisterDetail",
                })
              }
              style={styles.btnlogin}
            >
              <Text style={styles.textLogin}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RegisterDetails", {
                  name: "RegisterDetail",
                })
              }
            >
              <View style={styles.textNotTappo}>
                <Text style={styles.textLoginDetail}>Not on Tappo yet? </Text>
                <Text style={styles.textRegister}>Register</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
