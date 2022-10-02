import React, { Component, useRef, useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image,SafeAreaView,StyleSheet} from 'react-native';
import { black, Colors, headings, primaryColor, white } from '../utils/Styles';
import IconHeader from '../reuseables/IconHeader';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as WP, heightPercentageToDP as HP} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Btn2 from '../reuseables/Btn2';
import Btn1 from '../reuseables/Btn1';
import OfferBullet from '../reuseables/OfferBullet';
import ReactModal from '../reuseables/Modal';
import LoginModal from '../reuseables/LoginModal';



export default function Credits({navigation}) {
    const [offerCase, setOfferCase] = useState('gold');
	// const navigation = this.props.navigation;

    const modal = useRef()

	const Offer = (props)=>{
		return(
			<View style={{...styles.metalcontainer}}>
					<Btn2
								lableStyle={{ ...headings.h6M, color: primaryColor }}
								icon={
                                    <Image resizeMode='contain'  source={props.icon} />
                            }
                            onPress={props.onPress}
                                containerStyle={{...styles.bottonIconStyle,...props.textColor}}
								
							/>
                            <Text style={{...styles.offerText,...props.textColor}}>
                                {props.title}
                            </Text>
                            


				</View>
		)
	}
    const OfferContainer = (props)=>{
		if(offerCase == 'gold'){
            return(
                <View style={{...styles.mainContainer,marginTop:HP(8)}}>
                        <View style={styles.offerTitle}>
					<View style={styles.divider} />
					<Text style={styles.titleOffer}>
					Gold Offer
					</Text>
					<View style={styles.divider} />	
				</View>
                <Text style={{ ...headings.h7,alignSelf:'center'}}>
                Yearly Plan for <Text style={{color:primaryColor}}>SAR 599.99</Text>
					</Text>
                <OfferBullet text='Full Unlimited Access'/>
                <OfferBullet text='PGM Market Monitoring'/>
                <OfferBullet text='Favourite Items Tracking'/>
                <OfferBullet text='1 Registered Mobile'/>
                <OfferBullet text='24/7 Customer Support'/>
                                
    
    
                    </View>
            )
        }
        if(offerCase == 'silver'){
            return(
                <View style={{...styles.mainContainer,marginTop:HP(8)}}>
                        <View style={styles.offerTitle}>
					<View style={styles.divider} />
					<Text style={styles.titleOffer}>
					Silver Offer
					</Text>
					<View style={styles.divider} />	
				</View>
                <Text style={{ ...headings.h7,alignSelf:'center'}}>
                Monthly Plan for <Text style={{color:primaryColor}}>SAR 199.99</Text>
					</Text>
                <OfferBullet text='Full Unlimited Access'/>
                <OfferBullet text='PGM Market Monitoring'/>
                <OfferBullet text='Favourite Items Tracking'/>
                <OfferBullet text='1 Registered Mobile'/>
                <OfferBullet text='24/7 Customer Support'/>
                                
    
    
                    </View>
            )
        }
        if(offerCase == 'standard'){
            return(
                <View style={{...styles.mainContainer,marginTop:HP(8)}}>
                        <View style={styles.offerTitle}>
					<View style={styles.divider} />
					<Text style={styles.titleOffer}>
					Standard Offer
					</Text>
					<View style={styles.divider} />	
				</View>
                <Text style={{ ...headings.h7,alignSelf:'center'}}>
                Pay as you go for <Text style={{color:primaryColor}}>SAR 49.99</Text>
					</Text>
                <OfferBullet text='20 Searches'/>
                <OfferBullet text='1 Search = 1 credit'/>
                <OfferBullet text='10 Days PGM rates history'/>
                <OfferBullet text='1 Registered Mobile'/>
                                
    
    
                    </View>
            )
        }
	}



  return (
	<SafeAreaView style={styles.container}>
				<IconHeader
				lable2='Credits'
				containerStyle={styles.header}
					onleftPress={() => {
					
					}}
					leftBtn={
						<Ionicons
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

				{/* /////////////Offers categories */}
                
                <View style={styles.innerContainer}>
                <Offer onPress={()=>{setOfferCase('gold')}} icon={require('../assets/images/icons/gold.png')} title='Gold Offer' textColor={offerCase=='gold' ? {color:primaryColor,borderColor:primaryColor}:null}/>
                <Offer onPress={()=>{setOfferCase('silver')}} icon={require('../assets/images/icons/silver.png')} title='Silver Offer' textColor={offerCase=='silver' ? {color:primaryColor,borderColor:primaryColor}:null}/>
                <Offer onPress={()=>{setOfferCase('standard')}} icon={require('../assets/images/icons/green.png')} title='Standard Offer' textColor={offerCase=='standard' ? {color:primaryColor,borderColor:primaryColor}:null}/>
                
                </View>


                {/* ////////////Offers Container */}
                <OfferContainer/>
                
                
                
                <View>
                <Btn1
                onPress={()=>modal.current.toggleModal()}
				lableStyle={{ ...headings.h6M, color: white }}
				lable={'Buy Now'}
                
                />
                <ReactModal
                
				ref={modal}
				containerStyle={{borderRadius:10}}
				view={
					<LoginModal/>
				}
                />
                </View>


                
				

                
				
				
				

				
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
	
	metalcontainer:{
		// flexDirection:'row',
		
		alignSelf:'center',
		// borderWidth:0.2,
		marginTop:'2%',
		
		padding:5,
},
	
	
	
	elevated:{
        elevation:2,
        borderWidth:0.2
    },
	mainContainer:{
        flex:1,
        
        backgroundColor:'white'
    },
    bottonIconStyle:{
        backgroundColor:white,
        borderWidth:1,
        borderColor:Colors.lightgrey,
        // margin:'2%',
        height:HP('7%'),
        width:WP('25%'),
    },
    offerText:{
        ...headings.h7,
        alignSelf:'center',
        color:Colors.gray
    },
    offerTitle:{  
        marginTop:'2%',
        alignItems: 'center',
        width:'80%' ,
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    divider:{
        width:'25%',
        borderBottomWidth:1
    },
    innerContainer:{
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'space-between',
        width:WP(100),
        marginTop:HP(2)
    },
    titleOffer:{ ...headings.h4b,color:primaryColor}



});