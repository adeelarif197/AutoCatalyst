import Onboarding from 'react-native-onboarding-swiper';
import { Text, View, Image, Dimensions } from 'react-native';
import React, { Component } from 'react';

export default class OnBoardingScreens extends Component {
	render() {
		var { width , height } = Dimensions.get('window');
		const navigation = this.props.navigation;
		return (
			<View style={{ flex: 1,justifyContent:'flex-start' }}>
				<Onboarding
					bottomBarHighlight={false}
					onSkip={() => navigation.replace('Login')}
					onDone={() => navigation.replace('Login')}
					pages={[
						{
							backgroundColor: 'white',
							
							title: 'Explore and Track',
							subtitle: 'Access a never ending database of Catalytic Converters & monitor their prices.',
							image: (
								<Image
									source={require('../assets/images/S1.png')}
									style={{ width: width * 0.9, height: height * 0.5}}
									resizeMode="contain"
								/>
							),
							titleStyles: { fontSize: 18, fontWeight: 'bold', color: '#198754', textAlign: 'center' },
						},
						{
							backgroundColor: 'white',
							image: (
								<Image
									source={require('../assets/images/S2.png')}
									style={{width: width * 0.9, height: height * 0.5}}
									resizeMode="contain"
								
								/>
							),
							title: 'Get In-depth Cat Details',
							subtitle: 'You get the most in-depth details about the catalytic converter that you look for.',
							titleStyles: { fontSize: 18, fontWeight: 'bold', color: '#198754', textAlign: 'center' }
						},
						{
							backgroundColor: 'white',
							image: (
								<Image
									source={require('../assets/images/S3.png')}
									style={{width: width * 0.9, height: height * 0.5}}
									resizeMode="contain"
								
								/>
							),
							title: 'Quick, Easy & Reliable',
							subtitle: 'Cat Price ensures the usability to be easy and secure to provide you the best Cat market experience.',
							titleStyles: { fontSize: 18, fontWeight: 'bold', color: '#198754', textAlign:'justify' },
                            
						}
					]}
				/>
			</View>
		);
	}
}
