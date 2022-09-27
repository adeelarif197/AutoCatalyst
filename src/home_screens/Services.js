import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image,SafeAreaView,StyleSheet} from 'react-native';
import { primaryColor } from '../utils/Styles';
import IconHeader from '../reuseables/IconHeader';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { InputField } from '../reuseables/InputField';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function Services() {

	const Metals = ()=>{
		return(
			<View style={{flexDirection:'row', width:'95%',alignSelf:'center',borderWidth:0.2,marginTop:'2%',borderRadius:5,padding:5}}>
					<View style={{borderRadius:100,height:50,width:50,backgroundColor:primaryColor,alignItems:'center',justifyContent:'center',marginRight:'1%'}}>
					<Text style={{margin:5, fontSize: 22, color: 'white',textAlign:'center',fontWeight:'bold' }}>
					PT
					</Text>
					</View>
					<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flex:1}}>
					<Text style={{margin:5, fontSize: 18, textAlign:'center' }}>
					SAR 274.68
					</Text>
					<Text style={{margin:5, fontSize: 18, textAlign:'center'}}>
					03H03M
					</Text>
					</View>


				</View>
		)
	}



  return (
	<SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
				<IconHeader
					onleftPress={() => {
					
					}}
					leftBtn={
						<Ionicons
							size={35}
							name="menu"
							color={primaryColor}
							style={{ left: 20, top: 20 }}
						/>
					}
					rightBtn={
						<Ionicons
							size={35}
							name="cart-outline"
							color={primaryColor}
							style={{ right: 20, top: 20 }}
						/>
					}
				/>
				<View style={styles.item}>
					<Image resizeMode='contain' style={{height:'65%',width:'100%'}} source={require('../assets/images/CP.png')} />
				</View>
				<View style={{  alignItems: 'center',width:'70%' ,alignSelf:'center'}}>
					<Text style={{ fontSize: 20, fontWeight: 'bold', letterSpacing: 0.8, color: 'black',textAlign:'center' }}>
					Search Catalytic Converters for price.
					</Text>
					
					
				</View>
				<View style={{marginTop:'3%',  alignItems: 'center',width:'85%' ,alignSelf:'center'}}>
				<Text style={{ fontSize: 16, color: 'grey',textAlign:'center' }}>
					Browse among more than <Text style={{color: 'green',fontWeight:"bold"}}>40,000</Text> catalytic converters prices in our records.
Our prices are based on a real ICP results according to <Text style={{color: 'green',fontWeight:"bold"}}>PT, PD, RH</Text>.
					</Text>
				</View>

				<InputField
			lable={'Search by part id'}
			isEditable={false}
			icon={<Ionicons name="search-outline" size={20} color={'grey'} />}
			// value={this.state.firstname}
			// onChange={(txt) => {
			// this.setState({ firstname: txt });
			// }}
			/>
			<View style={{  alignItems: 'center',width:'70%' ,alignSelf:'center'}}>
					<Text style={{ fontSize: 14, color: 'grey',textAlign:'center' }}>
					Example: 123421, TR PSA K494 etc.
					</Text>
					
					
				</View>
				<View style={{  marginTop:'2%',alignItems: 'center',width:'80%' ,alignSelf:'center',flexDirection:'row',justifyContent:'space-between'}}>
					<View style={{width:'25%',borderBottomWidth:1}} />
					<Text style={{ fontSize: 22, color: primaryColor,textAlign:'center',fontWeight:'bold' }}>
					Metal Prices
					</Text>
					<View style={{width:'25%',borderBottomWidth:1}} />
					
					
				</View>

				{/* {Metals} */}
				<View style={{flexDirection:'row', width:'95%',alignSelf:'center',borderWidth:0.2,marginTop:'2%',borderRadius:5,padding:5}}>
					<View style={{borderRadius:100,height:50,width:50,backgroundColor:primaryColor,alignItems:'center',justifyContent:'center',marginRight:'1%'}}>
					<Text style={{margin:5, fontSize: 22, color: 'white',textAlign:'center',fontWeight:'bold' }}>
					PT
					</Text>
					</View>
					<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flex:1}}>
					<Text style={{margin:5, fontSize: 18, textAlign:'center' }}>
					SAR 274.68
					</Text>
					<Text style={{margin:5, fontSize: 18, textAlign:'center'}}>
					03H03M
					</Text>
					</View>


				</View>
				<View style={{flexDirection:'row', width:'95%',alignSelf:'center',borderWidth:0.2,marginTop:'2%',borderRadius:5,padding:5}}>
					<View style={{borderRadius:100,height:50,width:50,backgroundColor:primaryColor,alignItems:'center',justifyContent:'center',marginRight:'1%'}}>
					<Text style={{margin:5, fontSize: 22, color: 'white',textAlign:'center',fontWeight:'bold' }}>
					PT
					</Text>
					</View>
					<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flex:1}}>
					<Text style={{margin:5, fontSize: 18, textAlign:'center' }}>
					SAR 274.68
					</Text>
					<Text style={{margin:5, fontSize: 18, textAlign:'center'}}>
					03H03M
					</Text>
					</View>


				</View>
				<View style={{flexDirection:'row', width:'95%',alignSelf:'center',borderWidth:0.2,marginTop:'2%',borderRadius:5,padding:5}}>
					<View style={{borderRadius:100,height:50,width:50,backgroundColor:primaryColor,alignItems:'center',justifyContent:'center',marginRight:'1%'}}>
					<Text style={{margin:5, fontSize: 22, color: 'white',textAlign:'center',fontWeight:'bold' }}>
					PT
					</Text>
					</View>
					<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flex:1}}>
					<Text style={{margin:5, fontSize: 18, textAlign:'center' }}>
					SAR 274.68
					</Text>
					<Text style={{margin:5, fontSize: 18, textAlign:'center'}}>
					03H03M
					</Text>
					</View>


				</View>

				
			</SafeAreaView>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	item: {
		// flex: 1,
		justifyContent: 'center',
		// alignItems: 'center',
		height:'20%',
		width:'40%',
		alignSelf:'center'
		
	}
});