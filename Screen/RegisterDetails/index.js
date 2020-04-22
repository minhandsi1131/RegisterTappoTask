import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
//UI PHOTO
import recapcha from "../../assets/recapcha.png";
import { styles2 } from "../styles";
//UI PHOTO

export default class RegisterDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

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
      <SafeAreaView style={styles2.container}>
        <ScrollView>
          <View style={styles2.topContainer}>
            <Text style={styles2.textBold}>Fill in your details: </Text>
            <View style={styles2.editEmail}>
              <Text style={styles2.textTitleInput}>Email</Text>
              <TextInput
                placeholder={emailplace}
                style={styles2.textInput}
                onChangeText={(text) => this.setState({ email: text })}
                value={email}
              />
            </View>
            <View style={styles2.editPassword}>
              <Text style={styles2.textTitleInput}>Password</Text>
              <TextInput
                placeholder={passwordplace}
                style={styles2.textInput}
                onChangeText={(text) => this.setState({ password: text })}
                value={password}
              />
            </View>
            <Text style={{ marginVertical: 10 }}>
              8-16 characters with at least 1 lower, 1 uppercase, digit number,
              and symbol except for ambigous characters (e.g.[]()\/`*-~;:.)
            </Text>
            <Text style={{ fontSize: 16 }}>Confirm Password</Text>
            <TextInput
              placeholder={passwordagain}
              style={styles2.textInput}
              onChangeText={(text) => this.setState({ repassword: text })}
              value={repassword}
            />
            <View style={styles2.viewCapcha}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CheckBox
                  style={{ marginLeft: 10 }}
                  value={checked}
                  disabled={false}
                  onValueChange={() => this.setState({ checked: !checked })}
                />
                <Text style={styles2.textCapcha}>I'm not a robot</Text>
              </View>
              <Image source={recapcha} style={styles2.imgCapcha} />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
              style={styles2.btnlogin}
            >
              <Text style={styles2.textNext}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
