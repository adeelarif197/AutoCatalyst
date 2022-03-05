import {
	Text,
	View,
	Image,
	TextInput,
	ScrollView,
	KeyboardAvoidingView,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import { container, headings, primaryColor, white } from '../utils/Styles';
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicon from 'react-native-vector-icons/Ionicons';
import IconHeader from '../reuseables/IconHeader';
import languages from '../assets/languages/English.json';
import Btn1 from '../reuseables/Btn1';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Checkout extends Component {
	render() {
		return (
			<SafeAreaView style={styles.mainview}>
				<ScrollView>
					<View style={{ flexDirection: 'row', padding: 20 }}>
						<IconHeader
							onleftPress={() => {
								this.props.navigation.navigate('MechanicInfo');
							}}
							leftBtn={<AntDesign size={25} name="arrowleft" color={primaryColor} />}
						/>
						<Text style={{ ...headings.h5M, color: primaryColor, top: 5, left: 10 }}>
							{languages.checkout}
						</Text>
					</View>
					<View style={{}}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 22,
								fontFamily: 'Metropolis-SemiBold',
								fontWeight: '600',
								color: '#68397E'
							}}
						>
							Your Address
						</Text>
					</View>
					<View style={styles.midview}>
						<TextInput
							style={styles.textinput}
							placeholder="Full Name"
							keyboardType="default"
							placeholderTextColor={'grey'}
						/>
						<TextInput
							style={styles.textinput}
							placeholder="Phone Number"
							keyboardType="numeric"
							placeholderTextColor={'grey'}
						/>
						<TextInput
							style={styles.textinput}
							placeholder="Address Line"
							keyboardType="default"
							placeholderTextColor={'grey'}
						/>
					</View>
					<View style={styles.midview2}>
						<TextInput
							style={styles.textinput2}
							placeholder="  State"
							keyboardType="default"
							placeholderTextColor={'grey'}
						/>
						<TextInput
							style={styles.textinput2}
							placeholder="Zip Code"
							keyboardType="numeric"
							placeholderTextColor={'grey'}
						/>
					</View>
					<View style={styles.mainview3}>
						<TextInput
							style={styles.textinput}
							placeholder="Country"
							keyboardType="default"
							placeholderTextColor={'grey'}
						/>
					</View>
					<View style={{ justifyContent: 'center', marginVertical: 10 }}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 22,
								fontFamily: 'Metropolis-SemiBold',
								fontWeight: '400',
								color: 'grey',
								color: '#68397E'
							}}
						>
							Billing
						</Text>
					</View>
					<View style={{ padding: 10 }}>
						<Text
							style={{
								fontSize: 18,
								fontFamily: 'Metropolis-SemiBold',
								fontWeight: '600',
								color: '#949494'
							}}
						>
							Card Number
						</Text>
						<View style={{ flexDirection: 'row' }}>
							<TextInput
								style={styles.textinputcard}
								placeholder="XXXX XXXX XXXX XXXX"
								keyboardType="numeric"
								placeholderTextColor={'grey'}
							/>
							<Ionicon name="card" size={30} style={styles.IconStyle} />
						</View>
					</View>
					<View style={{ padding: 10, bottom: '2%' }}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<View style={{ width: '47%' }}>
								<Text
									style={{
										fontSize: 18,
										fontFamily: 'Metropolis-SemiBold',
										fontWeight: '600',
										color: '#949494',
										bottom: '1%'
									}}
								>
									Expiry date
								</Text>
							</View>
							<View style={{ width: '47%' }}>
								<Text
									style={{
										fontSize: 18,
										fontFamily: 'Metropolis-SemiBold',
										fontWeight: '600',
										color: '#949494',
										bottom: '1%'
									}}
								>
									CVV
								</Text>
							</View>
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<TextInput
								style={styles.textinput3}
								placeholder="MM/YY"
								keyboardType="default"
								placeholderTextColor={'grey'}
							/>
							<TextInput
								style={styles.textinput3}
								placeholder="XXX"
								keyboardType="numeric"
								placeholderTextColor={'grey'}
							/>
						</View>
					</View>

					<TouchableOpacity style={styles.button}
                   onPress={() => this.props.navigation.navigate('Credits')}
                    >
						<Text style={styles.t2}>Proceed to Checkout</Text>
					</TouchableOpacity>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
const styles = StyleSheet.create({
	mainview: {
		flex: 1,
		backgroundColor: 'white'
	},
	backview: {
		left: 10,
		flexDirection: 'row',
		// backgroundColor:'red',
		alignItems: 'center',
		marginVertical: '2%',
		width: '50%'
	},
	midview: {
		// backgroundColor:'#FAD7A0',
		marginHorizontal: 7
	},
	midview2: {
		// backgroundColor:'#D2B4DE',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginVertical: 5
	},
	mainview3: {
		// backgroundColor:'#F5B7B1',
		marginHorizontal: 5
	},
	t1: {
		fontSize: 22,
		fontWeight: '600',
		color: '#565656',
		fontFamily: 'Metropolis-SemiBold'
	},
	t2: {
		fontSize: 18,
		fontWeight: '500',
		color: '#ffffff',
		fontFamily: 'Metropolis-SemiBold'
	},
	textinput: {
		backgroundColor: '#F2F2F2',
		height: 48,
		margin: 7,
		padding: 10,
		borderRadius: 7,
		fontFamily: 'Metropolis-SemiBold',
		color: 'black'
	},
	textinput2: {
		backgroundColor: '#F2F2F2',
		height: 48,
		borderRadius: 7,
		width: '45%',
		fontFamily: 'Metropolis-SemiBold',
		color: 'black'
	},
	textinput3: {
		backgroundColor: '#F2F2F2',
		height: 48,
		borderRadius: 7,
		width: '47%',
		fontFamily: 'Metropolis-SemiBold',
		color: 'black'
	},
	IconStyle: {
		top: '2%',
		right: '80%',
		color: '#68397E'
	},
	textinputcard: {
		backgroundColor: '#F2F2F2',
		height: 48,
		width: '100%',
		padding: 10,
		borderRadius: 7,
		fontFamily: 'Metropolis-SemiBold',
		color: 'black'
	},
	button: {
		alignItems: 'center',
		backgroundColor: '#68397E',
		padding: 10,
		borderRadius: 7,
		marginHorizontal: '5%',
		marginVertical: '10%',
		top: 30
	}
});
