import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, Alert, alert } from 'react-native';
import React, { Component } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IconHeader from '../reuseables/IconHeader';
import { container, headings, primaryColor, white } from '../utils/Styles';
import languages from '../assets/languages/English.json';

export default class Credits extends Component {
	createTwoButtonAlert = () =>
		Alert.alert('Check_out', 'SUCCESSFULY CHECK_OUT', [
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel'
			},
			{ text: 'OK', onPress: () => console.log('OK Pressed') }
		]);
	render() {
		return (
			<SafeAreaView style={styles.mainview}>
				{/* <View style={styles.backview}>
					<TouchableOpacity>
						<Ionicon name="arrow-back" size={35} color="#68397E">
							{' '}
						</Ionicon>
					</TouchableOpacity>
					<Text style={styles.t1}>Vehicle Credits</Text>
				</View> */}
				<View style={{ flexDirection: 'row', padding: 20 }}>
					<IconHeader
						onleftPress={() => {
							this.props.navigation.navigate('MechanicInfo');
						}}
						leftBtn={<AntDesign size={25} name="arrowleft" color={primaryColor} />}
					/>
					<Text style={{ ...headings.h5M, color: primaryColor, top: 5, left: 10 }}>{languages.credit}</Text>
				</View>
				<View style={styles.imgview}>
					<Image source={require('../assets/images/credits.png')} />
				</View>
				<View style={{ marginVertical: '5%' }}>
					<Text style={styles.t2}>Buy Vehicle Credits</Text>
				</View>
				<View style={{ marginVertical: '5%' }}>
					<Text style={styles.t3}>Choose Number of Vehicle Credits.</Text>
				</View>
				<View style={styles.btnview}>
					<View style={{ width: '30%', height: '60%' }}>
						<Text
							style={{
								fontFamily: 'Metropolis-SemiBold',
								color: '#565656',
								fontSize: 15,
								textAlign: 'center'
							}}
						>
							No. of Credits
						</Text>
						<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
							<TouchableOpacity style={styles.btn}>
								<Entypo name="minus" size={15} color="#FFFFFF">
									{' '}
								</Entypo>
							</TouchableOpacity>
							<View
								style={{
									height: 26,
									width: 26,
									backgroundColor: '#DADADA8C',
									borderRadius: 5,
									marginHorizontal: 2,
									justifyContent: 'center'
								}}
							>
								<Text
									style={{
										fontFamily: 'Metropolis-SemiBold',
										color: '#656B6A',
										fontSize: 15,
										textAlign: 'center'
									}}
								>
									1
								</Text>
							</View>
							<TouchableOpacity style={styles.btn}>
								<Entypo name="plus" size={15} color="#FFFFFF">
									{' '}
								</Entypo>
							</TouchableOpacity>
						</View>
					</View>
					<Text
						style={{
							marginHorizontal: 10,
							fontFamily: 'Metropolis-SemiBold',
							color: '#949494',
							fontSize: 20,
							marginTop: 20
						}}
					>
						X
					</Text>
					<View style={{ width: '30%', height: '60%' }}>
						<Text
							style={{
								fontFamily: 'Metropolis-SemiBold',
								color: '#565656',
								fontSize: 15,
								textAlign: 'center'
							}}
						>
							Price Per Credit
						</Text>
						<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
							<Text
								style={{
									fontFamily: 'Metropolis-SemiBold',
									color: '#565656',
									fontSize: 20,
									textAlign: 'center',
									fontWeight: '500'
								}}
							>
								$6.99
							</Text>
						</View>
					</View>
				</View>
				<Text
					style={{
						fontFamily: 'Metropolis-SemiBold',
						color: '#565656',
						fontSize: 15,
						textAlign: 'center',
						fontWeight: '500',
						marginTop: 20
					}}
				>
					Total Amount
				</Text>
				<View
					style={{
						backgroundColor: '#F6E3FF',
						marginHorizontal: 20,
						marginVertical: 10,
						height: '7%',
						borderRadius: 7,
						justifyContent: 'center'
					}}
				>
					<Text
						style={{
							fontFamily: 'Metropolis-SemiBold',
							color: '#68397E',
							fontSize: 20,
							textAlign: 'center',
							fontWeight: '500'
						}}
					>
						$6.99/Week
					</Text>
				</View>
				<TouchableOpacity
					style={styles.button}
                    onPress={this.createTwoButtonAlert}
				>
					<Text style={styles.t4}>Proceed to Checkout</Text>
				</TouchableOpacity>
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
	imgview: {
		marginTop: '25%',
		// backgroundColor:'red',
		alignItems: 'center',
		marginHorizontal: '30%'
	},
	btnview: {
		flexDirection: 'row',
		//  backgroundColor:'red',
		height: '15%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	btn: {
		height: 26,
		width: 26,
		backgroundColor: '#68397E',
		borderRadius: 5,
		marginHorizontal: 2,
		justifyContent: 'center',
		alignItems: 'flex-end'
	},
	button: {
		alignItems: 'center',
		backgroundColor: '#68397E',
		padding: 13,
		borderRadius: 7,
		marginHorizontal: 20,
		marginTop: '20%'
	},
	t1: {
		fontSize: 22,
		fontWeight: '600',
		color: '#565656',
		fontFamily: 'Metropolis-SemiBold'
	},
	t2: {
		fontFamily: 'Metropolis-SemiBold',
		color: '#565656',
		fontSize: 18,
		fontWeight: '600',
		textAlign: 'center'
	},
	t3: {
		fontFamily: 'Metropolis-SemiBold',
		color: '#565656',
		fontSize: 18,
		fontWeight: '500',
		textAlign: 'center'
	},
	t4: {
		fontSize: 18,
		fontWeight: '500',
		color: '#ffffff',
		fontFamily: 'Metropolis-SemiBold'
	}
});
