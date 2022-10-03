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

export default function SearchScreen() {
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
        // {
        //     id: 9,
        //     name: '897 123 312',
            
        //     image: [
        //         {
        //             src:require('../assets/images/Avatar.png')
        //         },
        //         {
        //             src:require('../assets/images/Avatar.png')
        //         },
        //         {
        //             src:require('../assets/images/Avatar.png')
        //         }
        //     ]
        // },
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
                                  <TouchableOpacity
                                  onPress={() => refRBSheet.current.open()}
                                //   activeOpacity={1}
                                  style={styles.helpIcon}>
                                  <Ionicons
                                  size={20}
                                  name="help"
                                  color={primaryColor}
                                  
                              />
                                  </TouchableOpacity>
                                  
                                   
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
                                      onPress={()=>modal.current.toggleModal()}
                                      // onPress={() => }
                                    //   onPress={() => console.log(props)}
      
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

                              
                              <ReactModal
				ref={modal}
				// containerStyle={{top:100}}
				view={
					<LoginModal modelref={modal}/>
				}
				/>
                          
                      </View>
                  </View>
        )
      }



    ////////////Component for Product in list
    const ProductsView = (props) => {
        const Images = props.item.image.src
		return (
			<View style={styles.ProductView}>
				<TouchableOpacity
					onPress={() => {setSearchTxt( props.item.name)
                        setShowList( false)}}
					style={{  }}
				>
					<View style={{ flexDirection: 'row' }}>
						<View style={styles.productLogoContainer}>
							<Image style={styles.productLogo} resizeMode='stretch' source={props.item.image} />
                            
                             
						</View>

						<Text style={styles.productName}>
							{props.item.name}
						</Text>
					</View>
					
				</TouchableOpacity>
			</View>
		);
	};



    ///////////Product Card
    


    ///////////Filter list when user inputs on the search
    useEffect(() => {
      console.log('Here Updated')
     const data = searchData.filter(function(item){
        return item.name.includes(searchTxt);
     })
     setFilterData(data);
    
      
    }, [searchTxt])
    

  return (
    <SafeAreaView style={styles.mainContainer}>
      <IconHeader
				lable2='Search'
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
      <InputField
      containerStyle={{...styles.innerContainer,...styles.elevated}}
      textInputStyle={styles.mainContainer}
      oninputfocus={()=>{setShowList(false)}}
      oninputblur={()=>{setShowList(true)}}
			lable={'Search by part id'}
			
			icon={<Ionicons onPress={()=>{
                setSearchTxt('');
            }} name="search-outline" size={20} color={'grey'} />}
            
			value={searchTxt}
			onChange={(txt) => {
                setSearchTxt( txt); 
                setShowList(true)
			}}
			/>


            {/* ////////Conditional rendering to show either Products or Dropdown on SearchScreen .........Penidng */}
            {
                showList==true ? (<View style={{...styles.innerContainer,flex:1}} >
                    <FlatList horizontal={false} showsVerticalScrollIndicator={false} renderItem={ProductsView} data={searchTxt==''? searchData: filterData} />
                    </View>): <View style={{...styles.innerContainer,flex:1}} >
                    <FlatList horizontal={false} showsVerticalScrollIndicator={false} renderItem={ProductsCard} data={searchTxt==''? searchData: filterData} />
            </View>
            }

                        <RBSheet
                            ref={refRBSheet}
                            
                            closeOnDragDown={true}
                            closeOnPressMask={false}
                            customStyles={{
                            wrapper: {
                                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                
                            },
                            container: {
                                borderTopLeftRadius:15,
                                borderTopRightRadius:15
                            },
                            draggableIcon: {
                                
                            }
                            }}>

                                <Text style={{...headings.h6,alignSelf:'center'}}>Information</Text>
                                <InputField
                                    containerStyle={styles.typeInfo}
                                    textInputStyle={styles.mainContainer}
                                    oninputfocus={()=>{setShowList(false)}}
                                    oninputblur={()=>{setShowList(true)}}
                                    lable={'Type anything to ask....'}
                                            
                                    
                                            
                                   value={searchTxt}
                                onChange={(txt) => {
                                                setSearchTxt( txt); 
                                                setShowList(true)
                                            }}
                                            />
                                            <Btn1
								lableStyle={{ ...headings.h5b, color:white }}
								lable={'Send'}
							/>

                            </RBSheet>
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
        
        
    },
    ProductView:{ 
    alignSelf:'center' ,
    flex:1,
    width:'100%',
    marginVertical:'4%'
    },
    productLogo:{
        width:35,
        height:30
    },
    elevated:{
        elevation:2,
        // borderWidth:0.2
    },
    productName:{ 
        ...headings.h6,
        left:'60%'
    },
    productLogoContainer:{ 
    alignItems: 'flex-start', 
    left: 10,
    flexDirection:'row' 
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