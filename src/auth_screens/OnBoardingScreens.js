import Onboarding from 'react-native-onboarding-swiper';
import { Text, View, Image, Dimensions,StyleSheet, SafeAreaView } from 'react-native';
import React, { Component } from 'react';
import IconHeader from '../reuseables/IconHeader';
import { primaryColor, textColorDim } from '../utils/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';





export default function OnBoardingScreens({navigation}) {
	const token = useSelector(state => state.auth.userToken);

	var { width , height } = Dimensions.get('window');


  return (
	<SafeAreaView style={styles.maincontainer}>
				<IconHeader
					
					// onleftPress={() => {
					// 	this.props.navigation.goBack();
					// }}
					leftBtn={<AntDesign size={25} name="arrowleft" color={primaryColor} style={{ left: 20 }}/>}
				/>
				<Onboarding
					bottomBarHighlight={false}
					onSkip={() => {token?  navigation.replace('Home'):navigation.replace('Home')}}
					onDone={() => {token?  navigation.replace('Home'):navigation.replace('Home')}}
					showDone={true}
					// imageContainerStyles={{backgroundColor:'red'}}
					subTitleStyles={styles.heading}
					containerStyles={{flexDirection:'column-reverse'}}
					titleStyles={ styles.subtitle}
					pages={[
						{
							backgroundColor: 'white',
							
							subtitle: 'Explore and Track',
							title: 'Access a never ending database of Catalytic Converters & monitor their prices.',
							image: (
								<Image
									source={require('../assets/images/S1.png')}
									style={{ width: width * 0.9, height: height * 0.6}}
									resizeMode="contain"
								/>
							),
							// titleStyles: { fontSize: 18, fontWeight: 'bold', color: '#198754', textAlign: 'center' },
						},
						{
							backgroundColor: 'white',
							image: (
								<Image
									source={require('../assets/images/S2.png')}
									style={{width: width * 0.9, height: height * 0.6}}
									resizeMode="contain"
								
								/>
							),
							subtitle: 'Get In-depth Cat Details',
							title: 'You get the most in-depth details about the catalytic converter that you look for.',
							// titleStyles: { fontSize: 18, fontWeight: 'bold', color: '#198754', textAlign: 'center' }
						},
						{
							backgroundColor: 'white',
							image: (
								<Image
									source={require('../assets/images/S3.png')}
									style={{width: width * 0.9, height: height * 0.6}}
									resizeMode="contain"
								
								/>
							),
							subtitle: 'Quick, Easy & Reliable',
							title: 'Cat Price ensures the usability to be easy and secure to provide you the best Cat market experience.',
							
                            
						}
					]}
				/>
			</SafeAreaView>
  )
}

const styles = StyleSheet.create({
	maincontainer: { flex: 1,justifyContent:'flex-start' },
	heading:{fontSize: 18, fontWeight: 'bold', color: primaryColor, textAlign: 'center'},
	subtitle:{fontSize: 14, textAlign:'center' ,color: textColorDim,},
	
});