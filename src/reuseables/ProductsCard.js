import { View, Text,TouchableOpacity ,Image,StyleSheet} from 'react-native'
import React, { useRef } from 'react'
import { headings, primaryColor, white } from '../utils/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as WP, heightPercentageToDP as HP} from 'react-native-responsive-screen';
import Btn1 from './Btn1';
import Btn2 from './Btn2';
import RBSheet from "react-native-raw-bottom-sheet";



export default function ProductsCard(props) {
    
    
  return (
    <View style={styles.ProductView}>
				<View
					// onPress={() => {navigation.navigate('Login')}}
					style={{  }}
				>
					<View style={{ flexDirection: 'row' }}>
						<View style={styles.productLogoContainer}>
							<Image style={styles.productLogo} resizeMode='contain' source={props.item.image} />
                            
                             
						</View>

						
                        <View style={styles.productTitleContainer}>
                        <Text style={styles.productName}>
							{props.item.name}
						</Text>
							<View style={styles.helpIcon}>
                            <Ionicons
							size={20}
							name="help"
							color={primaryColor}
							
						/>
                            </View>
                            
                             
						</View>
					</View>
                    <View style={styles.previewContainer}>
							<Image style={styles.productLogo} resizeMode='contain' source={props.item.preview} />
                            
                             
						</View>
                        <View style={styles.bottonContainer}>
                        <Btn1
								lableStyle={{ ...headings.h6M, color: primaryColor }}
								lable={'Show Price'}
                                containerStyle={styles.bottonStyle}
								// onPress={() => alert('asdfasdfasdf')}
								// onPress={() => }
								onPress={() => console.log(props)}

								// onPress={() => navigation.navigate('Home')}
							/>
                            <Btn2
								lableStyle={{ ...headings.h6M, color: primaryColor }}
								icon={<Ionicons
                                    size={20}
                                    name="heart-outline"
                                    color={primaryColor}
                                    
                                />}
                                containerStyle={styles.bottonIconStyle}
								// onPress={() => alert('asdfasdfasdf')}
								// onPress={() => }
								// 

								// onPress={() => navigation.navigate('Home')}
							/>
                        </View>
                        
					
				</View>
			</View>
  )
}

const styles = StyleSheet.create({
    
    ProductView:{ 
    alignSelf:'center' ,
    flex:1,
    width:WP('90%'),
    // height:HP('30%'),
    marginVertical:'2%',
    // backgroundColor:'red',
    borderRadius:10,
    elevation:0.8,
    padding:WP('3%')

    },
    productLogo:{
       alignSelf:'center'
    },
    elevated:{
        elevation:2,
        // borderWidth:0.2
    },
    productName:{ 
        ...headings.h6,
        left:'10%',
        // alignSelf:'center'
    },
    productLogoContainer:{ 
    alignItems: 'flex-start', 
    left: 5,
    flexDirection:'row' ,
    // backgroundColor:'red',
    justifyContent:'center',
    height:HP('7%'),
    width:HP('7%'),
    // borderRadius:1000,
    // borderWidth:0.5

    
},
productTitleContainer:{ 
    alignItems: 'flex-start', 
    left: 10,
    flexDirection:'row' ,
    
    flex:1,
    justifyContent:'space-between'
},
helpIcon:{
    height:HP('4%'),
    width:HP('4%'),
    elevation:0.8,
    
    marginRight:WP('2%'),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100
},
previewContainer:{
    height:HP('20%'),
    width:WP('80%'),
    marginRight:WP('2%'),
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    
},
bottonStyle:{
    backgroundColor:white,
    borderWidth:1,
    borderColor:primaryColor,
    // margin:'2%',
    width:WP('60%'),
    marginHorizontal:5
    
},
bottonIconStyle:{
    backgroundColor:white,
    borderWidth:1,
    borderColor:primaryColor,
    margin:'2%',
    width:WP('15%')
},
bottonContainer:{ flexDirection: 'row',justifyContent:'space-between',marginTop:'2%' }
	
});