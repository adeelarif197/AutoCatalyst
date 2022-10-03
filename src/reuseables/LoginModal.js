import React, { Component, useEffect, useRef, useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { container, headings, primaryColor, Colors, white, textColor } from '../utils/Styles';
import IconHeader from '../reuseables/IconHeader';
import languages from '../assets/languages/English.json';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { InputField } from '../reuseables/InputField';
import Btn1 from '../reuseables/Btn1';
// import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../Redux/Actions';
import CountryPicker from "react-native-country-codes-picker";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import ReactModal from './Modal';
import SignUp from '../auth_screens/SignUp';
import SignUpModal from './SignUpModal';



const myref = React.createRef();






export default function LoginModal(props,{navigation}) {
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
  ////////Login Modal Ref
  const modalRef = useRef();

  useEffect(() => {
	  
    
  
    return () => {
		
      
    }
  }, [myLoginError])

  const UserLoginFunction = async () => {
	  


    const params = {username: username,mobileCode: '966', password: password};
    console.log('loginfun');
    if (username && password) {
      dispatch(loginRequest({params, setMyLoginError,}));
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
	<View style={{flex:1,alignItems:'center',backgroundColor:'white',borderRadius:10}}>
		{/* <IconHeader
				// lable2='Search'
				containerStyle={{width:widthPercentageToDP(70)}}
				
					rightBtn={
						<Ionicons
                        onPress={props.toggleModal}
							size={25}
							name="chevron-down"
							color={primaryColor}
                            
							
						/>
					}
				/> */}
				
				{/* <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }}> */}
					{/* /////////////Logo */}
				<View style={styles.item}>
					<Image resizeMode='contain' style={{height:'65%',width:'100%'}} source={require('../assets/images/Logo2.png')} />
				</View>
					<View style={{ alignItems: 'center', marginVertical: 5 }}>
						<Text style={{ ...headings.h1s, color: primaryColor }}>{languages.login}</Text>
					</View>
					

					<View style={{width:widthPercentageToDP(100)}}>
					
						<InputField
							keyboardType="phone-pad"
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
							onPress={() => {props.modelref.current.toggleModal();
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
							onPress={()=>modalRef.current.toggleModal()}
						>
							<Text  style={{ ...headings.h6, color: primaryColor, textAlign: 'center',}}>
								{languages.register}
							</Text>
						</TouchableOpacity>
					</View>
				{/* </ScrollView> */}
				<ReactModal
				ref={modalRef}
				containerStyle={{borderRadius:10}}
				view={
					<SignUpModal/>
				}
				/>

				
			</View>
  )
}

const styles = StyleSheet.create({
	
	item: {
		// flex: 1,
		justifyContent: 'center',
		// alignItems: 'center',
		height:'20%',
		width:'60%',
		alignSelf:'center'
		
	},


});