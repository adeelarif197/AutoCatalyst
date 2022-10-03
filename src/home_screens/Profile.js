import React, { Component, useRef, useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image,SafeAreaView,StyleSheet} from 'react-native';
import { black, Colors, headings, primaryColor, white } from '../utils/Styles';
import IconHeader from '../reuseables/IconHeader';
import languages from '../assets/languages/English.json';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as WP, heightPercentageToDP as HP} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Btn2 from '../reuseables/Btn2';
import Btn1 from '../reuseables/Btn1';
import ReactModal from '../reuseables/Modal';
import LoginModal from '../reuseables/LoginModal';
import IconTile from '../reuseables/IconTile';
import { useDispatch, useSelector } from 'react-redux';



export default function Profile({navigation}) {
    const [offerCase, setOfferCase] = useState('gold');
    const userData = useSelector(state => state.auth.userData);
    const dispatch = useDispatch();
	// const navigation = this.props.navigation;

     ////////Login Modal Ref
     const modal = useRef();
	



  return (
	<SafeAreaView style={styles.container}>
				<IconHeader
				lable2='Profile'
				containerStyle={styles.header}
					onleftPress={() => {
					
					}}
					leftBtn={
						<Ionicons
                        onPress={()=>{
                            console.log(userData);
                        }}
							size={35}
							name="menu"
							color={primaryColor}
							// style={{ left: 20, top: 20 }}
						/>
					}
					rightBtn={
						<Text>      </Text>
					}
				/>

				
                
                
                
                {userData?
                <View style={styles.innerContainer}>
                <IconTile 
                containerStyle={styles.tileContainer}
                 lable1Style={styles.lableStyle}
                 lable2Style={styles.lableStyle}
                 lable1='Current Plan'
                 lable2='null'
                 icon={<Ionicons
                             size={22}
                             name="chevron-forward"
                             color={primaryColor}
                             // style={{ left: 20, top: 20 }}
                         />}
                 />
                 <IconTile 
                containerStyle={styles.tileContainer}
                 lable1Style={styles.lableStyle}
                 lable2Style={styles.lableStyle}
                 lable1='Country/Region'
                 lable2={userData.countryEn}
                 icon={<Ionicons
                             size={22}
                             name="chevron-forward"
                             color={primaryColor}
                             // style={{ left: 20, top: 20 }}
                         />}
                 />
                 <IconTile 
                containerStyle={styles.tileContainer}
                 lable1Style={styles.lableStyle}
                 lable2Style={styles.lableStyle}
                 lable1='CountryCode'
                 lable2={userData.countryCode}
                 icon={<Ionicons
                             size={22}
                             name="chevron-forward"
                             color={primaryColor}
                             // style={{ left: 20, top: 20 }}
                         />}
                 />
                 <IconTile 
                containerStyle={styles.tileContainer}
                 lable1Style={styles.lableStyle}
                 lable2Style={styles.lableStyle}
                 lable1='Currency'
                 lable2={userData.defCurrency}
                 icon={<Ionicons
                             size={22}
                             name="chevron-forward"
                             color={primaryColor}
                             // style={{ left: 20, top: 20 }}
                         />}
                 />
                 <IconTile
                 avatar={<Ionicons
                     size={50}
                     name="person-circle"
                     color={primaryColor}
                     // style={{ left: 20, top: 20 }}
                 />} 
                containerStyle={styles.tileContainer}
                 lable1Style={styles.lableStyle}
                 lable2Style={styles.lableStyle}
                 lable1={userData.fullNameEn}
                 // lable2='hello'
                 icon={
                 <Ionicons
                             size={22}
                             name="chevron-forward"
                             color={primaryColor}
                             // style={{ left: 20, top: 20 }}
                         />}
                 />
                 
                 </View> :
                 
                 
                 <View style={styles.item}>
					<ReactModal
				ref={modal}
				// containerStyle={{top:100}}
				view={
					<LoginModal modelref={modal}/>
				}
				/>
                    <Image resizeMode='contain' style={{height:'65%',width:'100%'}} source={require('../assets/images/Frame.png')} />
                    <Text style={{...styles.lableStyle,...headings.h3,color:primaryColor}}>
                        {languages.isLogin}
                    </Text>
				</View>
                 
                
            }


                <Btn1
								lableStyle={{ ...headings.h6M, color: white }}
								lable={userData? 'LogOut' : 'LogIn'}
								onPress={()=>{
                                    userData?
                                    dispatch({
                                    type: 'LOGOUT',
                                  }) :
                                    modal.current.toggleModal()
                                  
                                
                                }}
								// onPress={() => }
								// onPress={() => UserLoginFunction()}

								// onPress={() => navigation.navigate('Home')}
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
    innerContainer: {
		flex: 1,
		backgroundColor: 'white',
		// justifyContent:'space-between'
		
	},
	header:{
		elevation:5,
		paddingHorizontal:"2%",
		paddingTop:'1%'
	},
    tileContainer:{
        borderWidth:1,
        margin:5,
        borderRadius:5,
        borderColor:Colors.lightgrey,
        alignItems:'center'
    },
    lableStyle:{
        ...headings.h6M,
        color:Colors.gray,
        alignSelf:'center'
    },
    item: {
		// flex: 1,
		justifyContent: 'center',
		// alignItems: 'center',
		height:'60%',
		width:'80%',
		alignSelf:'center'
		
	},
	
	



});