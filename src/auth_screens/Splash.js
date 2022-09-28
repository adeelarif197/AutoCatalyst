import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { withDecay } from 'react-native-reanimated';

class Splash extends Component {
	constructor(props) {
		super(props);
		setTimeout(() => {
			this.props.navigation.replace('OnBoardingScreens');
		}, 2000);
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.item}>
					<Image resizeMode='contain' style={{height:'100%',width:'100%',alignSelf:'center'}} source={require('../assets/images/CP.png')} />
				</View>
			</View>
		);
	}
}
export default Splash;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	item: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height:'30%',
		width:'40%',
		alignSelf:'center'
		
	}
});
