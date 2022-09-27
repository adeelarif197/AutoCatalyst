import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image,TextInput, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { InputField } from '../reuseables/InputField';
import { useNavigation } from '@react-navigation/native';
import { ImageSlider } from "react-native-image-slider-banner";
import { Dimensions} from 'react-native'
import IconHeader from '../reuseables/IconHeader';

export default function ListScreen() {

    const navigation = useNavigation();
    const [searchData, setSearchData] = useState([
        {
            id: 1,
            name: '123123453',
            
            image: require('../assets/images/Avatar.png')
        },
        {
            id: 2,
            name: '123456786',
            
            image: require('../assets/images/Avatar.png')
        },
        {
            id: 3,
            name: '123324234',
            
            image: require('../assets/images/Avatar.png')
        },
        {
            id: 4,
            name: '23233234',
            
            image: require('../assets/images/Avatar.png')
        },
        {
            id: 5,
            name: '123345653',
            
            image: require('../assets/images/Avatar.png')
        },
        {
            id: 6,
            name: '123345563',
            
            image: require('../assets/images/Avatar.png')
        },
        {
            id: 7,
            name: '123232234',
            
            image: require('../assets/images/Avatar.png')
        },
        {
            id: 8,
            name: '123465123',
            
            image: require('../assets/images/Avatar.png')
        },
        {
            id: 9,
            name: '897123312',
            
            image: require('../assets/images/Avatar.png')
        },
    ]);
    const [searchTxt, setSearchTxt] = useState('');
    const [filterData, setFilterData] = useState('');
    const [counter, setConter] = useState(1);
    const [modalShow, setModalShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState();

    const ProductsCard = (props) => {
        
		return (
			<View style={{  alignSelf:'center' ,flex:1,width:'100%',marginVertical:'2%',paddingVertical:'5%',backgroundColor:'white',padding:5,borderWidth:0.2,borderColor:'grey'}}>
				<TouchableOpacity
					onPress={() => {setModalShow(true)}}
					style={{ padding:5 }}
				>
					<View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
						<View style={{ alignItems: 'center',justifyContent:'center', left: 10,height:80,width:80}}>
                        <ImageSlider
                        // previewImageStyle={{height:100,width:100}}
                        caroselImageStyle={{ width:80,height:80 ,borderRadius:100}}
                        preview={false}
                        showIndicator={false}
                        localImg
                        data={[
                            {img: require('../assets/images/VehicleLogo.png')},
                            {img: require('../assets/images/VehicleLogo.png')},
                            {img: require('../assets/images/VehicleLogo.png')}
                        ]}
                        autoPlay={false}
                        />
						</View>

						<View>
                        <Text style={{ alignSelf:'center', fontSize: 20, letterSpacing: 0.1,fontWeight:'bold', color: "#5E9B3E" }}>
							Show Price
						</Text>
                        <Text style={{ alignSelf:'center', fontSize: 15, letterSpacing: 0.5, color: 'black' }}>
							{props.item.name}
						</Text>
                        </View>
					</View>
                    <ImageSlider
                    preview={false}
                     data={[
        {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
        {img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
    ]}
    autoPlay={false}
    // onItemChanged={(item) => console.log("item", item)}
    // closeIconColor="#fff"
    />
                    <View style={{flexDirection:'row',width:'100%',height:'12%',justifyContent:'space-around',borderRadius:5}}>
                    <AntDesign style={{alignSelf:'center'}} name="staro" size={35} color={'black'} />
                    <View style={{flexDirection:'row',marginLeft:'5%'}}>
                        <TouchableOpacity onPress={()=>{
                            counter>0?
                           setConter(counter-1):
                           setConter(0) 
                        }} style={{height:'95%',width:'18%',borderRadius:5,alignItems:'center',backgroundColor:'silver',justifyContent:'center'}}>
                        <Ionicons name="remove" size={25} color={"#5E9B3E"} 
                        />
                        </TouchableOpacity>
                        <View style={{height:'95%',width:'18%',borderRadius:5,backgroundColor:'white',justifyContent:'center'}}>
                            <Text numberOfLines={1} style={{color:'black',fontSize:16,alignSelf:'center'}}>
                            {counter}
                            </Text>
                        </View>
                        <TouchableOpacity onPress={()=>{
                           setConter(counter+1) 
                        }} style={{height:'95%',width:'18%',borderRadius:5,alignItems:'center',backgroundColor:"#5E9B3E",justifyContent:'center'}}>
                        <Ionicons name="add" size={25} color={'white'} 
                        />
                        </TouchableOpacity>


                    </View>
                    <TouchableOpacity  style={{height:'95%',width:'25%',borderRadius:5,alignItems:'center',backgroundColor:"#5E9B3E",justifyContent:'center'}}>
                        <MaterialIcons name="add-shopping-cart" size={25} color={'white'} 
                        />
                        </TouchableOpacity>
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
    <SafeAreaView style={{flex:1,paddingHorizontal:'0%',paddingTop:'2%',backgroundColor:'white'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',padding:5,backgroundColor:'white',borderColor:"#5E9B3E",borderWidth:0.5,alignItems:'center',marginVertical:'1%'}}>
      <Ionicons name="chevron-back" size={25} color={"#5E9B3E"} onPress={()=>{
          navigation.goBack()
      }}/>
      <TextInput style={{flex:1,marginLeft:'2%'}} placeholder="Example: KT 114" />

      
      
      <View style={{flexDirection:'row',width:'35%',justifyContent:'space-around'}}>
      <Ionicons name="search" size={25} color={"#5E9B3E"} />
      <Image style={{width:40,height:30}} resizeMode='stretch' source={require('../assets/images/ocr.png')} />
      <Image style={{width:40,height:30}} resizeMode='stretch' source={require('../assets/images/catalytic-converter.png')} />
      </View>
      </View>
      <View style={{alignSelf:'center',flexDirection:'row'}}>
      <Text style={{fontSize:16,marginRight:'2%'}}>
          Filter By
      </Text>
      <Ionicons name="chevron-down" size={25} color={"#5E9B3E"} />
      </View>

      {/* <InputField
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
			/> */}
            <View style={{flex:1,alignSelf:'center',width:'100%'}} >
            <FlatList showsVerticalScrollIndicator={false} horizontal={false} renderItem={ProductsCard} data={searchTxt==''? searchData: filterData} />
            <Modal visible={modalShow} style={{flex:1}}>
            <View style={{flex:1,justifyContent:'space-between'}}>
            <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
						<View style={{ alignItems: 'center',justifyContent:'center', left: 10,height:80,width:80}}>
                        <ImageSlider
                        // previewImageStyle={{height:100,width:100}}
                        caroselImageStyle={{ width:80,height:80 ,borderRadius:100}}
                        preview={false}
                        showIndicator={false}
                        localImg
                        data={[
                            {img: require('../assets/images/VehicleLogo.png')},
                            {img: require('../assets/images/VehicleLogo.png')},
                            {img: require('../assets/images/VehicleLogo.png')}
                        ]}
                        autoPlay={false}
                        />
						</View>

						
                        <Text style={{ alignSelf:'center', fontSize: 30, letterSpacing: 0.1,fontWeight:'bold', color: "#5E9B3E" }}>
							Show Price
						</Text>
                        <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {setModalShow(false)}}>
                        <Ionicons  name="chevron-down" style={{alignSelf:'center'}} size={40} color={"#5E9B3E"} 
                        />
                        </TouchableOpacity>
                        
					</View>
                    <ImageSlider
                    preview={false}
                     data={[
        {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
        {img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
    ]}
    autoPlay={false}
    // onItemChanged={(item) => console.log("item", item)}
    // closeIconColor="#fff"
    />
                    <View style={{flexDirection:'row',width:'100%',height:'12%',justifyContent:'space-around',borderRadius:5}}>
                    <AntDesign style={{alignSelf:'center'}} name="staro" size={35} color={'black'} />
                    <View style={{flexDirection:'row',marginLeft:'5%'}}>
                        <TouchableOpacity onPress={()=>{
                            counter>0?
                           setConter(counter-1):
                           setConter(0) 
                        }} style={{height:'95%',width:'18%',borderRadius:5,alignItems:'center',backgroundColor:'silver',justifyContent:'center'}}>
                        <Ionicons name="remove" size={25} color={"#5E9B3E"} 
                        />
                        </TouchableOpacity>
                        <View style={{height:'95%',width:'18%',borderRadius:5,backgroundColor:'white',justifyContent:'center'}}>
                            <Text numberOfLines={1} style={{color:'black',fontSize:16,alignSelf:'center'}}>
                            {counter}
                            </Text>
                        </View>
                        <TouchableOpacity onPress={()=>{
                           setConter(counter+1) 
                        }} style={{height:'95%',width:'18%',borderRadius:5,alignItems:'center',backgroundColor:"#5E9B3E",justifyContent:'center'}}>
                        <Ionicons name="add" size={25} color={'white'} 
                        />
                        </TouchableOpacity>


                    </View>
                    <TouchableOpacity  style={{height:'95%',width:'25%',borderRadius:5,alignItems:'center',backgroundColor:"#5E9B3E",justifyContent:'center'}}>
                        <MaterialIcons name="add-shopping-cart" size={25} color={'white'} 
                        />
                        </TouchableOpacity>
                    </View>

            </View>
          
        </Modal>
            </View>
    </SafeAreaView>
  )
}

