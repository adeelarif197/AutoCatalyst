import React, { Component, useRef } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image,SafeAreaView,StyleSheet} from 'react-native';
import { black, Colors, headings, primaryColor, white } from '../utils/Styles';
import IconHeader from '../reuseables/IconHeader';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { InputField } from '../reuseables/InputField';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReactModal from '../reuseables/Modal';
import Login from '../auth_screens/Login';
import LoginModal from '../reuseables/LoginModal';
import { widthPercentageToDP } from 'react-native-responsive-screen';



export default function Services({navigation}) {
	// const navigation = this.props.navigation;
	const modal = useRef()

	const Metals = (props)=>{
		return(
			<View style={styles.metalcontainer}>
					<View style={styles.metalCircle}>
					<Text style={{ ...headings.h6,...styles.metalname}}>
					{props.title}
					</Text>
					</View>
					<View style={styles.metalInternal}>
					<Text style={{...headings.h7 }}>
					{props.rate}
					</Text>
					<Text style={{...headings.h8M}}>
					{props.time}
					</Text>
					</View>


				</View>
		)
	}



  return (
	<SafeAreaView style={styles.container}>
				<IconHeader
				lable2='Home'
				containerStyle={styles.header}
					onleftPress={() => {
					
					}}
					leftBtn={
						<Ionicons
						onPress={()=>modal.current.toggleModal()}
							size={35}
							name="menu"
							color={primaryColor}
							// style={{ left: 20, top: 20 }}
						/>
					}
					rightBtn={
						<Ionicons
							size={35}
							name="cart-outline"
							color={primaryColor}
							// style={{ right: 20, top: 20 }}
						/>
					}
				/>

				{/* /////////////Logo */}
				<View style={styles.item}>
					<Image resizeMode='contain' style={{height:'65%',width:'100%'}} source={require('../assets/images/CP.png')} />
				</View>



				<View style={styles.subTitleContainer}>
					<Text style={styles.title}>
					Search Catalytic Converters for price.
					</Text>
					
					
				</View>
				<View style={styles.discContainer}>
				<Text style={styles.discribtion}>
					Browse among more than <Text style={styles.highlight}>40,000</Text> catalytic converters prices in our records.
					Our prices are based on a real ICP results according to <Text style={styles.highlight}>PT, PD, RH</Text>.
					</Text>
				</View>

				<TouchableOpacity onPress={()=>{
					navigation.navigate('SearchScreen')
				}}>
				<InputField
				containerStyle={{...styles.innerContainer,...styles.elevated}}
				textInputStyle={styles.mainContainer}
				lable={'Search by part id'}
				isEditable={false}
				icon={<Ionicons name="search-outline" size={20} color={'grey'} />}
				// value={this.state.firstname}
				// onChange={(txt) => {
				// this.setState({ firstname: txt });
				// }}
				/>
				</TouchableOpacity>
			
					<Text style={{ ...headings.h8,...styles.exampleContainer }}>
					Example: 123421, TR PSA K494 etc.
					</Text>
					
					
				
				<View style={styles.divider}>
					<View style={styles.dividerBar} />
					<Text style={{ ...headings.h4b,...styles.highlight}}>
					Metal Prices
					</Text>
					<View style={styles.dividerBar} />
					
					
				</View>

				
				
				{/* //////////will set a flatlist to render data from API */}
				<ScrollView>
				<Metals title='Pt' rate='SAR 112.28' time='03h:02m'/>
				<Metals title='Pd' rate='SAR 274.68' time='03h:02m'/>
				<Metals title='Rh' rate='SAR 1655.60' time='03h:02m'/>
				</ScrollView>


				{/* ///////////Login Modal */}

				<ReactModal
				ref={modal}
				containerStyle={{borderRadius:10}}
				view={
					<LoginModal/>
				}
				/>
				
				
				

				
			</SafeAreaView>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent:'space-between'
		
	},
	header:{
		elevation:5,
		paddingHorizontal:"2%",
		paddingTop:'1%'
	},
	item: {
		// flex: 1,
		justifyContent: 'center',
		// alignItems: 'center',
		height:'20%',
		width:'40%',
		alignSelf:'center'
		
	},
	title:{
		 ...headings.h5b ,
		 textAlign:'center',
		 color:black
		},
	discribtion:{
		 ...headings.h7M,
		 textAlign:'center',
		 color:Colors.gray
	},
	highlight:{
		color: primaryColor,
		fontWeight:"bold"
	},
	metalname:{
		color: white,
		fontWeight:"bold"
	},
	discContainer:{
	marginTop:'3%',
	alignItems: 'center',
	width:'90%',
	alignSelf:'center'
},
	exampleContainer:{
		alignItems: 'center',
		width:'70%' ,
		alignSelf:'center',
		textAlign:'center',
		// color:Colors.lightgrey,
		marginVertical:'2%'
},
	metalcontainer:{
		flexDirection:'row',
		width:'95%',
		alignSelf:'center',
		borderWidth:1,
		marginTop:'2%',
		borderRadius:5,
		padding:5,
		borderColor:Colors.lightgrey
},
	metalInternal:{
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between',
		flex:1
},
	metalCircle:{
		borderRadius:100,
		height:40,
		width:40,
		backgroundColor:primaryColor,
		alignItems:'center',
		justifyContent:'center',
		marginRight:'1%'
	},
	innerContainer:{
        backgroundColor:white,
        alignSelf:'center',
        width:'85%',
        
    },
	elevated:{
        elevation:2,
        borderWidth:0.2
    },
	mainContainer:{
        flex:1,
        
        backgroundColor:'white'
    },
	divider:{  
		marginTop:'2%',
		alignItems: 'center',
		width:'80%' ,
		alignSelf:'center',
		flexDirection:'row',
		justifyContent:'space-between'
	},
	dividerBar:{
		width:'25%',
		borderBottomWidth:1,
		borderColor:Colors.gray
	},
	subTitleContainer:{
		  alignItems: 'center',
		  width:widthPercentageToDP(60) ,
		  alignSelf:'center'
		}


});