import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { container, headings, primaryColor, Colors, white } from '../utils/Styles';
import IconHeader from '../reuseables/IconHeader';
import languages from '../assets/languages/English.json';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { InputField } from '../reuseables/InputField';
import Btn1 from '../reuseables/Btn1';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';



const myref = React.createRef();
export default class Login extends Component {
	state = {
		email: '',
		password: '',
		Pass: '',
		showPassword: true,
		emailError: '',
		isValid: false,
		passwordErrorMessage: '', // password error message
		loading: false,
		authUserID: '',
		isSubmitting: false
	};

	storeData = async () => {
		try {
			const jsonID = JSON.stringify(this.state.authUserID);
			const jsonEmail = JSON.stringify(this.state.email);
			const jsonPassword = JSON.stringify(this.state.Pass);

			await AsyncStorage.setItem('@IDSession', jsonID);
			console.log('SessionID Stored: ', JSON.parse(jsonID));

			await AsyncStorage.setItem('@emailSession', jsonEmail);
			console.log('SessionEmail Stored: ', JSON.parse(jsonEmail));

			await AsyncStorage.setItem('@passwordSession', jsonPassword);
			console.log('SessionPassword Stored: ', JSON.parse(jsonPassword));
			this.props.navigation.navigate('Services');
		} catch (e) {
			// saving error
		}
	};

	

	handleValidation = () => {
		const { email, Pass } = this.state;
		if (email == '' || Pass == '') {
			alert('All fields are required');
			return;
		}
		if (email != '' && Pass != '') {
			this.getFirestorData();
		}
		if (Pass.length < 5) {
			alert('password lenght must be 6 charater long');
			return;
		}
	};

	toggleSecure = () => {
		myref.current.toggleSecure();
	};

	render() {
		const { isSubmitting } = this.state;
		return (
			<View style={container.empty}>
				<IconHeader
					onleftPress={() => {
						this.props.navigation.goBack();
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
							value={this.state.email}
							onChange={(txt) => this.setState({ email: txt })}
						/>

						<InputField
							ref={myref}
							oniconPress={this.toggleSecure}
							isSecure={true}
							lable="Password"
							icon={<Entypo name="eye" size={20} color={Colors.gray} />}
							value={this.state.Pass}
							onChange={(txt) => this.setState({ Pass: txt })}
						/>

						<TouchableOpacity
							onPress={() => {
								this.props.navigation.navigate('ForgotPassword');
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

								onPress={() => this.props.navigation.navigate('Home')}
							/>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}
