import { Text, View, Image, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { container, headings, primaryColor, white } from '../utils/Styles';
import IconHeader from '../reuseables/IconHeader';
import languages from '../assets/languages/English.json';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SwitchSelector from 'react-native-switch-selector';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import Btn1 from '../reuseables/Btn1';

function BookingMechanic() {
	const [ open, setOpen ] = useState(false);
	const [ value, setValue ] = useState(null);
	const [ items, setItems ] = useState([
		{ label: '9 AM to 11 AM', value: '9to11' },
		{ label: '11 AM to 1 PM', value: '11to1' },
		{ label: '1 PM to 3 PM', value: '1to3' },
		{ label: '3 PM to 5 PM', value: '3to5' },
		{ label: '5 PM to 7 PM', value: '5to7' }
	]);

	return (
		<ScrollView contentContainerStyle={{ flex: 1 }}>
			<View style={{ flex: 1, backgroundColor: 'white' }}>
				<View style={{ flexDirection: 'row', padding: 20 }}>
					<IconHeader
						onleftPress={() => {
							this.props.navigation.navigate('MechanicInfo');
						}}
						leftBtn={<AntDesign size={25} name="arrowleft" color={primaryColor} />}
					/>
					<Text style={{ ...headings.h5M, color: primaryColor, top: 5, left: 10 }}>{languages.booking}</Text>
				</View>

				<View style={{}}>
					<SwitchSelector
						initial={0}
						onPress={(value) => this.setState({ gender: value })}
						selectedColor={'white'}
						buttonColor={'#68397E'}
						backgroundColor={'#F9ECFF'}
						hasPadding={true}
						height={50}
						borderRadius={7}
						style={{ marginHorizontal: 30 }}
						options={[ { label: 'Hire now', value: 'h' }, { label: 'Schedule', value: 's' } ]}
					/>
				</View>
				<View style={{ flex: 1, padding: 10, justifyContent: 'space-between', bottom: 20 }}>
					<View style={{ flex: 1 }}>
						<View style={{ marginLeft: '5%', marginTop: '10%' }}>
							<Text style={{ ...headings.h6, color: 'black' }}>{languages.selectime}</Text>
						</View>

						<View style={{ zIndex: 1000 }}>
							<DropDownPicker
								open={open}
								value={value}
								items={items}
								setOpen={setOpen}
								setValue={setValue}
								setItems={setItems}
								placeholder="9AM to 11AM"
								placeholderStyle={{
									color: 'grey',
									fontWeight: 'bold',
									textAlign: 'center'
								}}
								containerStyle={{
									marginTop: '5%',
									paddingHorizontal: 20
								}}
								dropDownContainerStyle={{
									marginHorizontal: 20,
									borderWidth: 0,
									elevation: 5
								}}
								style={{
									borderRadius: 0,
									borderWidth: 0,
									elevation: 5
								}}
								textStyle={{
									fontSize: 15,
									color: 'grey',
									fontWeight: 'bold',
									textAlign: 'center'
								}}
								maxHeight={200}
							/>
						</View>
					</View>

					<View style={{ marginLeft: '5%' }}>
						<Text style={{ ...headings.h6, color: 'black' }}>{languages.description}</Text>
					</View>

					<TextInput
          
						style={{
							marginHorizontal: 20,
							elevation: 2,
							height: '35%',
							width: '90%'
						}}
            
					/>
					{/* <View style={{}}>
						<TextInput
							style={{
								marginHorizontal: 20,
								elevation: 2,
								height: '55%',
								width: '90%',
								
							}}
							placeholder="Describe your work requisites"
							autoFocus={false}
							multiline={true}
							textBreakStrategy={'balanced'}
						/>
					</View> */}
				</View>

				{/* <KeyboardAvoidingView>
					<View style={{ }}>
						<Btn1
							lableStyle={{ ...headings.h6M, color: white }}
							lable={languages.proceed}
							onPress={() => this.props.navigation.navigate('Services')}
						/>
					</View>
				</KeyboardAvoidingView> */}
			</View>
		</ScrollView>
	);
}
export default BookingMechanic;
