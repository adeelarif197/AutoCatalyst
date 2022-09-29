import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { InputField } from '../reuseables/InputField';
import { useNavigation } from '@react-navigation/native';
import { headings, primaryColor, white } from '../utils/Styles';
import IconHeader from '../reuseables/IconHeader';
import ProductsCard from '../reuseables/ProductsCard';
import RBSheet from 'react-native-raw-bottom-sheet';

export default function SearchScreen() {
    // const navigation = useNavigation();



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
                    <FlatList horizontal={false} renderItem={ProductsView} data={searchTxt==''? searchData: filterData} />
                    </View>): <View style={{...styles.innerContainer,flex:1}} >
                    <FlatList horizontal={false} renderItem={ProductsCard} data={searchTxt==''? searchData: filterData} />
            </View>
            }

                        <RBSheet
                            ref={refRBSheet}
                            closeOnDragDown={true}
                            closeOnPressMask={false}
                            customStyles={{
                            wrapper: {
                                backgroundColor: "transparent"
                            },
                            draggableIcon: {
                                backgroundColor: "#000"
                            }
                            }}>

                                <Text>Here TYpe The</Text>
                            </RBSheet>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        
        backgroundColor:'white'
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
}
	
});