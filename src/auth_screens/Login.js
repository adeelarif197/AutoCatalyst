import React, { Component, useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet,Image} from 'react-native';
import { container, headings, primaryColor, Colors, white, textColor } from '../utils/Styles';
import IconHeader from '../reuseables/IconHeader';
import languages from '../assets/languages/English.json';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { InputField } from '../reuseables/InputField';
import Btn1 from '../reuseables/Btn1';
// import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../Redux/Actions';
import CountryPicker from "react-native-country-codes-picker";



const myref = React.createRef();






export default function Login({navigation}) {
	const dispatch = useDispatch();
  const token = useSelector(state => state.auth.userToken);
  const loginErrors = useSelector(state => state.auth.loginErrors);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobileCode, setMobileCode] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailErrorTxt, setEmailErrorTxt] = useState('');
  const [passwordErrorTxt, setPasswordErrorTxt] = useState('');
  const [myLoginError, setMyLoginError] = useState(false);
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+966');
  const [countryFlag, setCountryFlag] = useState('🇸🇦');

  const UserLoginFunction = async () => {
    const params = {username: username,mobileCode: countryCode, password: password};
    console.log('loginfun');
    if (username && password) {
      dispatch(loginRequest({params, setMyLoginError}));
    } else {
      if (!username) {
        setEmailError(true);
        setEmailErrorTxt('PhoneNumber is required');
      }
      if (!password) {
        setPasswordError(true);
        setPasswordErrorTxt('Password is Required');
      }
    }
  };





	const toggleSecure = () => {
		myref.current.toggleSecure();
	};
  return (
	<View style={container.empty}>
				
				<ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
					{/* /////////////Logo */}
				<View style={styles.item}>
					<Image resizeMode='contain' style={{height:'65%',width:'100%'}} source={require('../assets/images/CP.png')} />
				</View>
					<View style={{ alignItems: 'center', marginVertical: 5 }}>
						<Text style={{ ...headings.h1s, color: primaryColor }}>{languages.login}</Text>
					</View>
					

					<View>
					
						<InputField
							// keyboardType="numb"
							lefticon={<Text onPress={() => {
								setShow(true);
							  }}>{countryFlag} {countryCode}</Text>}
							lable="Phone Nymber"
							icon={<Fontisto name="phone" size={20} color={Colors.gray} />}
							value={username}
							onChange={(txt) =>setUsername(txt)}
						/>
						<CountryPicker
        show={show}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
		  setCountryFlag(item.flag)
          setShow(false);
        }}
      />
						

						<InputField
							ref={myref}
							oniconPress={()=>{toggleSecure}}
							isSecure={true}
							lable="Password"
							icon={<Entypo name="eye" size={20} color={Colors.gray} />}
							value={password}
							onChange={(txt) =>setPassword(txt)}
						/>

						<TouchableOpacity
							onPress={() => {
								navigation.navigate('ForgotPassword');
							}}
						>
							<Text style={{ ...headings.h6, color: primaryColor, textAlign: 'center',}}>
								{languages.forgetpass}
							</Text>
						</TouchableOpacity>

						<View style={{ marginTop: 25 }}>
							<Btn1
								lableStyle={{ ...headings.h6M, color: white }}
								lable={languages.login}
								// onPress={() => alert('asdfasdfasdf')}
								// onPress={() => }
								onPress={() => UserLoginFunction()}

								// onPress={() => navigation.navigate('Home')}
							/>
						</View>

						
							<Text style={{ ...headings.h6, color: textColor, textAlign: 'center',}}>
								{languages.dontaccount}
							</Text>
							<TouchableOpacity
							onPress={() => {
								navigation.navigate('SignUp');
							}}
						>
							<Text style={{ ...headings.h6, color: primaryColor, textAlign: 'center',}}>
								{languages.register}
							</Text>
						</TouchableOpacity>
						
					</View>
				</ScrollView>

				
			</View>
  )
}

const styles = StyleSheet.create({
	
	item: {
		// flex: 1,
		justifyContent: 'center',
		// alignItems: 'center',
		height:'20%',
		width:'40%',
		alignSelf:'center'
		
	},


});