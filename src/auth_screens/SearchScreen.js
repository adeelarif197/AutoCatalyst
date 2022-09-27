import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { InputField } from '../reuseables/InputField';
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen() {
    const navigation = useNavigation();
    const [searchData, setSearchData] = useState([
        {
            id: 1,
            name: '123 123 453',
            
            image: require('../assets/images/Avatar.png')
        },
        {
            id: 2,
            name: '123 456 786',
            
            image: require('../assets/images/Avatar.png')
        },
        {
            id: 3,
            name: '123 324 234',
            
            image: require('../assets/images/Avatar.png')
        },
        {
            id: 4,
            name: '23 233 234',
            
            image: require('../assets/images/Avatar.png')
        },
        {
            id: 5,
            name: '123 345 653',
            
            image: require('../assets/images/Avatar.png')
        },
        {
            id: 6,
            name: '123 345 563',
            
            image: require('../assets/images/Avatar.png')
        },
        {
            id: 7,
            name: '123 232 234',
            
            image: require('../assets/images/Avatar.png')
        },
        {
            id: 8,
            name: '123 345 123',
            
            image: require('../assets/images/Avatar.png')
        },
        {
            id: 9,
            name: '897 123 312',
            
            image: require('../assets/images/Avatar.png')
        },
    ]);
    const [searchTxt, setSearchTxt] = useState('');
    const [filterData, setFilterData] = useState('');

    const ProductsView = (props) => {
		return (
			<View style={{  alignSelf:'center' ,flex:1,width:'100%',marginVertical:'4%'}}>
				<TouchableOpacity
					onPress={() => {navigation.navigate('MyTabs')}}
					style={{  }}
				>
					<View style={{ flexDirection: 'row' }}>
						<View style={{ alignItems: 'flex-start', left: 10 }}>
							<Image style={{width:50,height:30}} resizeMode='stretch' source={require('../assets/images/VehicleLogo.png')} />
						</View>

						<Text style={{ alignSelf:'center',left: 30, fontSize: 15, letterSpacing: 0.5, color: 'black' }}>
							{props.item.name}
						</Text>
					</View>
					
				</TouchableOpacity>
			</View>
		);
	};

    useEffect(() => {
      console.log('Here Updated')
     const data = searchData.filter(function(item){
        return item.name.includes(searchTxt);
     })
     setFilterData(data);
    
      
    }, [searchTxt])
    

  return (
    <SafeAreaView style={{flex:1,paddingHorizontal:'2%',paddingTop:'4%',backgroundColor:'white'}}>
      <View>
      <Ionicons name="chevron-back" size={25} color={"#5E9B3E"} onPress={()=>{
          navigation.goBack()
      }}/>
      </View>
      <InputField
      containerStyle={{width:'100%',marginHorizontal:0}}
			lable={'Search by part id'}
			// isEditable={false}
			icon={<Ionicons onPress={()=>{
                setSearchTxt('');
            }} name="ios-close-circle-sharp" size={20} color={'grey'} />}
            lefticon={<Ionicons name="search-outline" size={20} color={'grey'} />}
			value={searchTxt}
			onChange={(txt) => {
                setSearchTxt( txt); 
			}}
			/>
            <View style={{flex:1,alignSelf:'center',width:'100%'}} >
            <FlatList horizontal={false} renderItem={ProductsView} data={searchTxt==''? searchData: filterData} />
            </View>
    </SafeAreaView>
  )
}

