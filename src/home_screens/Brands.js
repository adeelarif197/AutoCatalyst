import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { InputField } from '../reuseables/InputField';
import { useNavigation } from '@react-navigation/native';
import { headings, primaryColor, white } from '../utils/Styles';
import IconHeader from '../reuseables/IconHeader';
import RBSheet from 'react-native-raw-bottom-sheet';
import { widthPercentageToDP as WP, heightPercentageToDP as HP} from 'react-native-responsive-screen';
import Btn1 from '../reuseables/Btn1';
import Btn2 from '../reuseables/Btn2';
import ReactModal from '../reuseables/Modal';
import LoginModal from '../reuseables/LoginModal';
import { useDispatch } from 'react-redux';
import { logout, logoutUser } from '../Redux/Actions';

export default function Brands() {
    // const navigation = useNavigation();
    // const dispatch = useDispatch();



    ///////////Temporary Object for the Product Lists
    const [searchData, setSearchData] = useState([
        {
            id: 1,
            name: 'CAT-0043',
            
            image: require('../assets/images/Audi.png'),
            preview: require('../assets/images/pngwing.png')
        },
        {
            id: 2,
            name: 'CAT 0647',
            
            image: require('../assets/images/Honda.png'),
            preview: require('../assets/images/pngwing.png')
        },
        {
            id: 3,
            name: 'CAT 131 ER-01',
            
            image: require('../assets/images/BMW.png'),
            preview: require('../assets/images/pngwing.png')
        },
        {
            id: 4,
            name: 'CAT 131 ER-23',
            
            image: require('../assets/images/Nissan.png'),
            preview: require('../assets/images/pngwing.png')
        },
        {
            id: 5,
            name: 'CAT 0642',
            
            image: require('../assets/images/Mitsubishi.png'),
            preview: require('../assets/images/pngwing.png')
        },
        {
            id: 6,
            name: 'CAT 129L',
            
            image: require('../assets/images/Hyundai.png'),
            preview: require('../assets/images/pngwing.png')
        },
        {
            id: 7,
            name: 'CATCZ7458',
            
            image: require('../assets/images/Chevrolet.png'),
            preview: require('../assets/images/pngwing.png')
        },
        
    ]);

    ////////states for searching Data
    const [searchTxt, setSearchTxt] = useState('');
    const [filterData, setFilterData] = useState('');
    const [showList, setShowList] = useState(false);
    ////////RawBottomSheet Ref
    const refRBSheet = useRef();

    ////////Login Modal Ref
    const modal = useRef();


    ////////////Component For Product in Cards
    const ProductsCard= (props) =>  {
    
    
        return (
          <View style={styles.ProductView}>
                      
                          
                          
                              <View style={styles.productLogoContainer}>
                                  <Image style={styles.productLogo} resizeMode='contain' source={props.item.image} />
                                  
                                   
                              </View>
      
                              
                              
                          
                      
                  </View>
        )
      }



   



    ///////////Product Card
    


    

  return (
    <SafeAreaView style={styles.mainContainer}>
      <IconHeader
				lable2='Brands'
				containerStyle={styles.header}
					onleftPress={() => {
					
					}}
					leftBtn={
						<Ionicons
							size={35}
							name="menu"
							color={primaryColor}
							
						/>
					}
					rightBtn={
						<Ionicons
                        // onPress={()=>{dispatch({
                        //     type: 'LOGOUT',
                        //   });}}
							size={35}
							name="cart-outline"
							color={primaryColor}
                            
							
						/>
					}
				/>
     


            
             <View style={{...styles.innerContainer}} >
                    <FlatList numColumns={3} horizontal={false} showsVerticalScrollIndicator={false} renderItem={ProductsCard} data={searchData} />
            </View>
            

                       
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        
        backgroundColor:'white',
        
    },
	header:{
		elevation:5,
		paddingHorizontal:"2%",
		paddingTop:'1%'
	},
    innerContainer:{
        backgroundColor:white,
        alignSelf:'center',
        width:'95%',
        height:HP(100),
        // backgroundColor:'red'
        
        
    },
    productLogo:{
        alignSelf:"center"
    },
    elevated:{
        elevation:2,
        // borderWidth:0.2
    },
    productName:{ 
        ...headings.h6,
        left:'60%'
    },
typeInfo:{
    backgroundColor:white,
    alignSelf:'center',
    width:'95%',
    height:HP('18%'),
    borderWidth:0.2

    },
    ProductView:{ 
        alignSelf:'center' ,
        // flex:1,
        width:WP('30%'),
        height:WP('30%'),
        // marginVertical:'2%',
        // backgroundColor:'red',
        borderRadius:10,
        elevation:0.8,
        padding:WP('3%'),

        margin:'1%'
    
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
        alignItems: 'center', 
        // left: 5,
        flex:1,
        flexDirection:'row' ,
        // backgroundColor:'red',
        justifyContent:'center',
        elevation:0.8,
        // border
    
        
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