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
import CalendarPicker from 'react-native-calendar-picker';
import { useNavigation } from '@react-navigation/native';

function BookingMechanic({ }) {
	const [ selectedStartDate, setSelectedStartDate ] = useState(null);
	const [ selectedEndDate, setSelectedEndDate ] = useState(null);
	const navigation = useNavigation();

	const onDateChange = (date, type) => {
		//function to handle the date change
		if (type === 'END_DATE') {
			setSelectedEndDate(date);
		} else {
			setSelectedEndDate(null);
			setSelectedStartDate(date);
		}
	};
	const [ selectCategory, setselectCategory ] = useState(0);
	const [ open, setOpen ] = useState(false);
	const [ value, setValue ] = useState(null);
	const [ items, setItems ] = useState([
		{ label: '9 AM to 11 AM', value: '9to11' },
		{ label: '11 AM to 1 PM', value: '11to1' },
		{ label: '1 PM to 3 PM', value: '1to3' },
		{ label: '3 PM to 5 PM', value: '3to5' },
		{ label: '5 PM to 7 PM', value: '5to7' }
	]);
	const SelectCategoryf = (param) => {
		console.log('index is=', param);
		switch (param) {
			case 0:
				return (
					////////////////////////HireNow S1////////////////////////
					<View style={{ flex: 1, justifyContent: 'space-evenly' }}>
						<View style={{}}>
							<View style={{ marginLeft: '5%' }}>
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

						<View>
							<View style={{ marginLeft: '5%' }}>
								<Text style={{ ...headings.h6, color: 'black' }}>{languages.description}</Text>
							</View>
							<View
								style={{
									marginHorizontal: 20,
									elevation: 2,
									height: '50%',
									borderWidth: 0,
									alignItems: 'flex-start'
								}}
							>
								<TextInput
									style={{color:'black'}}
									placeholder="Describe your work requisites"
									placeholderTextColor={'grey'}
									autoFocus={false}
									multiline={true}
									textBreakStrategy={'balanced'}
								/>
							</View>
						</View>
					</View>
				);
			case 1:
				return (
					////////////////////////Schedule S2////////////////////////
					<View style={{ flex: 1, justifyContent: 'space-evenly' }}>
						<View style={{ borderWidth: 0, elevation: 2, marginHorizontal: 15, paddingVertical: 10 }}>
							<CalendarPicker
								startFromMonday={true}
								allowRangeSelection={true}
								minDate={new Date(2018, 1, 1)}
								maxDate={new Date(2050, 6, 3)}
								weekdays={[ 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun' ]}
								months={[
									'January',
									'Febraury',
									'March',
									'April',
									'May',
									'June',
									'July',
									'August',
									'September',
									'October',
									'November',
									'December'
								]}
								previousTitle="Previous"
								previousTitleStyle={{ left: '25%' }}
								nextTitle="Next"
								nextTitleStyle={{ right: '25%' }}
								todayBackgroundColor="#68397E"
								todayTextColor="white"
								selectedDayColor="#68397E"
								selectedDayTextColor="white"
								scaleFactor={375}
								textStyle={{
									fontFamily: 'Cochin',
									color: '#000000'
								}}
								onDateChange={onDateChange}
							/>
						</View>
					</View>
				);
		}
	};

	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<View style={{ flexDirection: 'row', padding: 20 }}>
				<IconHeader
					onleftPress={() => {
						navigation.goBack();
					}}
					leftBtn={<AntDesign size={25} name="arrowleft" color={primaryColor} />}
				/>
				<Text style={{ ...headings.h5M, color: primaryColor, top: 5, left: 10 }}>{languages.booking}</Text>
			</View>

			<View style={{}}>
				<SwitchSelector
					initial={0}
					onPress={(value) => setselectCategory(value)}
					selectedColor={'white'}
					buttonColor={'#68397E'}
					backgroundColor={'#F9ECFF'}
					hasPadding={true}
					height={50}
					borderRadius={7}
					style={{ marginHorizontal: 30 }}
					options={[ { label: 'Hire now', value: 0 }, { label: 'Schedule', value: 1 } ]}
				/>
				{/* <TouchableOpacity onPress={() => setselectCategory(index)} style={{width: '50%',}}>
                                <Text style={[styles.ProductsSectionSecondHeading1, selectCategory == index &&  styles.ProductsSectionActiveHeading1, ]}>{item.title}</Text>
                            </TouchableOpacity> */}
			</View>
			{SelectCategoryf(selectCategory)}

			<View style={{ bottom: 10 }}>
				<Btn1
					lableStyle={{ ...headings.h6M, color: white }}
					lable={languages.proceed}
					onPress={() => {
						navigation.navigate('Checkout');
					}}
				/>
			</View>
		</View>
	);
}
export default BookingMechanic;
