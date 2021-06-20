import React, { Component } from 'react';
import { Button, View, StyleSheet, ScrollView, Text, Image, TextInput, KeyboardAvoidingView, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import Home from '../components/Home'
import AsyncStorage from '@react-native-community/async-storage';
import ValidationComponent from 'react-native-form-validator';
import * as Yup from 'yup'; // for everything
import { Formik } from 'formik';
import DropdownAlert from 'react-native-dropdownalert';
import RNRestart from 'react-native-restart';
import axios from 'axios';
import Geocoder from 'react-native-geocoding';
// import { LoginButton } from 'react-native-fbsdk';
import { LoginButton, AccessToken } from 'react-native-fbsdk';


// import GetLocation from 'react-native-get-location';
class AlertHelper {
  static dropDown;
  static onClose;
  static setDropDown(dropDown) {
    this.dropDown = dropDown;
  }
  static show(type, title, message) {
    if (this.dropDown) {
      this.dropDown.alertWithType(type, title, message);
    }
  }
  static setOnClose(onClose) {
    this.onClose = onClose;
  }
  static invokeOnClose() {
    if (typeof this.onClose === 'function') {
      this.onClose();
    }
  }
}
import GetLocation from 'react-native-get-location'
export default class log_in extends ValidationComponent {

  constructor(props) {
    super(props);
    this.state = {
      email: "", password: "", home: false, home_dashborad: false, Step1_dashborad: false, Step2_dashborad: false, Salondashboard_dashborad: false,
      Clientdashboard_dashborad: false, Step1_sty_dashborad: false, Stylist_dashboard: false
    };
  }

  componentDidMount() {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location);
        // fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + location["longitude"] + ',' + location["latitude"] + '&key=' + 'AIzaSyAguX1gOmpBnmxCzaJ2-D6cD-XhG7in0PE')
        //   .then((response) => response.json())
        //   .then((responseJson) => {
        //     console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
        //   })
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      })
  }

  loginAuth() {
    AsyncStorage.getItem('user')
      .then((value) => {
        this.setState({ user: true ? JSON.parse(value) : null, login: value ? true : null });
        userss = JSON.parse(value);
      });
  }
  handleFocus = () => { console.log('foc'); this.setState({ isFocused: true }) }
  handleBlur = () => { console.log('test'); this.setState({ isFocused: false }) }
  async _LOGINButton(value) {
    try {
      axios.post('http://172.21.15.184:3000/login',
        {
          'username': value.email,
          'password': value.password,
        }, {
        "headers": {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, timeout: 5000
      }).then((response) => {
        console.log(response)
        if (response.status == '400') {
          AsyncStorage.setItem('login', 'false');
          console.log(response);
          alert('Please enter your valid email or password');
        } else {
          AlertHelper.show('success', 'success', "Great! You have successfully registered. A confirmation link has been sent to your email address. Please check.");
          var res = response.data;
          logoutAuth();
          async function logoutAuth() {
            try {
              await AsyncStorage.removeItem('user');
              await AsyncStorage.setItem('login', 'false');
              await AsyncStorage.setItem('user', JSON.stringify(res));
              await AsyncStorage.setItem('login', 'true');
              loginAuth(res);
            } catch (error) {
              console.log('failed save youser date');
            }
          };
          async function loginAuth(res) {
            try {
              await AsyncStorage.setItem('user', JSON.stringify(res));
              await AsyncStorage.setItem('login', 'true');
              // RNRestart.Restart();
              console.log('success save user date');
            } catch (error) {
              console.log('failed save youser date');
            }
          };
        }
      })
        .catch((error) => {
          console.log("axios error:", error);
          alert('Please enter your valid email or password');
        });
    } catch (errors) {
      console.log(errors);
    }
  };

  render() {
    const SignupSchema = Yup.object().shape({
      password: Yup.string()
        .min(6, 'Too Short!')
        .max(16, 'Too Long!')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email')
        .required('email is Required'),
    });
    return (
      <View style={{ flex: 1 }}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={SignupSchema}
          onSubmit={values => this._LOGINButton(values)}
        >
          {(props) => (
            <ScrollView style={styles.container} contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'space-between'
            }}>
              <DropdownAlert
                defaultContainer={{ padding: 8, paddingTop: StatusBar.currentHeight, flexDirection: 'row' }}
                ref={ref => AlertHelper.setDropDown(ref)}
                onClose={() => AlertHelper.invokeOnClose()}
              />
              <View style={{ flex: 2, justifyContent: 'center' }}></View>
              <View style={styles.insaid}>
                <View style={{ flex: 2 }}>
                  <Text style={styles.logintr}>Sign in</Text>
                </View>
                <View style={styles.buttonContainer}>
                  <TextInput
                    onFocus={this.handleFocus}
                    onEndEditing={this.handleBlur}
                    onChangeText={props.handleChange('email')}
                    onBlur={props.handleBlur('email')}
                    style={{
                      height: 40, borderBottomWidth: 0.5,
                      borderBottomColor: this.state.isFocused
                        ? '#1c61b3'
                        : 'gray',
                    }}
                    placeholder="Email"
                    value={props.values.email}
                  />
                  {props.touched.email && props.errors.email && <Text style={{ height: 15, color: "red", fontSize: 14 }}>{props.touched.email && props.errors.email}</Text>}
                </View>

                <View style={styles.buttonContainer}>
                  <TextInput
                    onChangeText={props.handleChange('password')}
                    secureTextEntry={true}
                    onBlur={props.handleBlur('password')}
                    style={{ height: 40, borderBottomColor: 'gray', borderBottomWidth: 0.5 }}
                    placeholder="Password"
                    value={props.values.password}
                  />
                  {props.touched.password && props.errors.password && <Text style={{ height: 15, color: "red", fontSize: 14 }}>{props.touched.password && props.errors.password}</Text>}
                </View>
                <View style={{ margin: 5, flex: 1 }}>
                  <Text style={{ fontSize: 13.5, color: '#1c61b3' }}>Forget your password?</Text>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={props.handleSubmit}>
                    <Text style={{ color: "#fff", textAlign: 'center', backgroundColor: '#1c61b3', padding: 7.5 }}>Sign In</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ margin: 5, flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                  <View  >
                    <Text style={styles.title2}>Don't have an account? </Text>
                  </View>
                  <View>
                    <Text style={styles.title3}>Register</Text>
                  </View>
                </View>
              </View><View style={{ flex: 1 }}></View>
              <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }} >
                  <Text style={styles.title2}>Or sign in with</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 1 }}></View>
                  <View style={{ flex: 1 }}>
                    <LoginButton
                      onLoginFinished={
                        (error, result) => {
                          if (error) {
                            console.log("login has error: " + error);
                          } else if (result.isCancelled) {
                            console.log("login is cancelled.");
                          } else {
                            AccessToken.getCurrentAccessToken().then(
                              (data) => {
                                console.log(data.accessToken.toString())
                              }
                            )
                          }
                        }
                      }
                      onLogoutFinished={() => console.log("logout.")} />
                    {/* <Image source={require('./img/face.jpg')} style={{ width: 45, height: 45 }} ></Image> */}
                  </View>
                  <View style={{ flex: 1 }}>
                    <Image source={require('./img/gmail.png')} style={{ width: 45, height: 45 }} ></Image>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Image source={require('./img/link.png')} style={{ width: 45, height: 45 }} ></Image>
                  </View>
                  <View style={{ flex: 1 }}></View>
                </View>
              </View>
              <View style={{ flex: 1 }}></View>
            </ScrollView>
          )}
        </Formik>
      </View >
    );
  }
}
const styles = StyleSheet.create({
  insaid: {
    flex: 1,
    margin: 25,
  },
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 20, color: '#1c61b3'
  },
  title2: {
    textAlign: 'center',
    flex: 1,
    fontSize: 14
  },
  title3: {
    textAlign: 'center',
    flex: 1,
    fontSize: 14, color: '#1c61b3'
  },
  logintr: {
    textAlign: 'center',
    fontSize: 20,
  },
  buttonContainer: {
    margin: 5,
    flex: 2
  }
});