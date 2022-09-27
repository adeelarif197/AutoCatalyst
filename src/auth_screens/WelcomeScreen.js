import { View, Text,Image ,ImageBackground,ScrollView, TouchableOpacity, SafeAreaView} from 'react-native'
import React from 'react'
// import { BackgroundImage } from 'react-native-elements/dist/config'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { InputField } from '../reuseables/InputField';
import { useNavigation } from '@react-navigation/native';
// import { ScrollView } from 'react-native-gesture-handler';

export default function WelcomeScreen() {
	const navigation = useNavigation();

  return (
	  <SafeAreaView style={{flex:1}}>
	{/* <ScrollView > */}
		<ImageBackground style={{height:'100%'}} resizeMode='cover' source={require('../assets/images/HomeBackGround.jpg')} >
		<ScrollView style={{backgroundColor: 'rgba(0, 0.1, 0, 0.4)'}}>
		<View style={{flexDirection:'row',marginLeft:'5%',marginTop:'15%'}}>

		<View>
		<Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>AutoCatalyst</Text>
		<Text style={{fontSize:12,color:'white',fontWeight:'bold'}}>Market</Text>
		</View>
		</View>
		<View style={{marginTop:'5%'}}>
		<View style={{marginHorizontal:'5%',marginVertical:'10%'}}>
		<Text style={{fontSize:25,color:'white',fontWeight:'bold',textAlign:'center',marginTop:'10%'}}>The prices of catlyst based on PT,PD,RH</Text>
		
		</View>
		
		<TouchableOpacity activeOpacity={1} onPress={()=>{
			console.log('Navigate ME to Search')
			navigation.navigate('SearchScreen')
		}}>
		<InputField
			lable={'Search by part id'}
			isEditable={false}
			icon={<Ionicons name="search-outline" size={20} color={'grey'} />}
			// value={this.state.firstname}
			// onChange={(txt) => {
			// this.setState({ firstname: txt });
			// }}
			/>
			</TouchableOpacity>
		<View style={{marginHorizontal:'5%',flexDirection:'row',alignSelf:'center'}}>
		<Text style={{fontSize:14,color:'white',textAlign:'center',marginLeft:'2%'}}>Example: </Text>
		<Text  style={{fontSize:14, textDecorationLine:"underline", color:'white',textAlign:'center',marginLeft:'1%'}}>1740060</Text>
		<Text style={{fontSize:14,color:'white',textAlign:'center',marginLeft:'1%'}}>or</Text>
		<Text style={{fontSize:14,color:'white',textAlign:'center',marginLeft:'1%',textDecorationLine: 'underline'}}>TA TRS K765</Text>
		</View>
		<View style={{marginHorizontal:'5%',flexDirection:'row',alignSelf:'center',marginTop:'10%'}}>
		<Text style={{fontSize:16,color:'white',textAlign:'center',marginLeft:'2%'}}>Pt <Text style={{fontWeight:'400'}}>$15 </Text></Text>
		<Text  style={{fontSize:16, color:'white',textAlign:'center',marginLeft:'1%'}}>Pd <Text style={{fontWeight:'400'}}>$78 </Text></Text>
		<Text style={{fontSize:16,color:'white',textAlign:'center',marginLeft:'1%'}}>Rh <Text style={{fontWeight:'400'}}>$34 </Text></Text>
		
		</View>
		</View>
		</ScrollView>

			
			</ImageBackground>
	{/* </ScrollView> */}
	</SafeAreaView>
  )
}