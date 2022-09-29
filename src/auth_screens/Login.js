import React, { Component, useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { container, headings, primaryColor, Colors, white } from '../utils/Styles';
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

  const UserLoginFunction = async () => {
    const params = {username: username,mobileCode: '966', password: password};
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
				<IconHeader
					onleftPress={() => {
						navigation.goBack();
					}}
					leftBtn={
						<AntDesign size={25} name="arrowleft" color={primaryColor} style={{ left: 20, top: 20 }} />
					}
				/>
				<ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
					<View style={{ alignItems: 'center', marginVertical: 5 }}>
						<Text style={{ ...headings.h1s, color: primaryColor }}>{languages.login}</Text>
					</View>

					<View>
						<InputField
							// keyboardType="numb"
							lable="Phone Nymber"
							icon={<Fontisto name="phone" size={20} color={Colors.gray} />}
							value={username}
							onChange={(txt) =>setUsername(txt)}
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
					</View>
				</ScrollView>
			</View>
  )
}