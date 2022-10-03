import React, { Component, useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity,StyleSheet } from 'react-native';
import { container, headings, primaryColor, Colors, white } from '../utils/Styles';
import IconHeader from '../reuseables/IconHeader';
import languages from '../assets/languages/English.json';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { InputField } from '../reuseables/InputField';
import Btn1 from '../reuseables/Btn1';
import Mycheckbox from '../reuseables/Mycheckbox';
import CountryPicker from "react-native-country-codes-picker";
import CurrencyPicker from "react-native-currency-picker"
import { widthPercentageToDP as WP, heightPercentageToDP as HP} from 'react-native-responsive-screen';


const myref = React.createRef();
const myref1 = React.createRef();






export default function SignUp({navigation}) {
	const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [mobileCode, setMobileCode] = useState('');
  const [number, setNumber] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState('');
  const [passwordErrorTxt, setPasswordErrorTxt] = useState('');
  const [isPolicyChecked, setIsPolicyChecked] = useState(false);
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+966');
  const [currencyCode, setCurrencyCode] = useState('SAR');
  const [countryFlag, setCountryFlag] = useState('🇸🇦');




	const toggleSecure = (ref) => {
		ref.current.toggleSecure();
	};

  return (
	<View style={container.empty}>
				
				<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
					<View style={{ alignItems: 'center', marginVertical: 5 }}>
						<Text style={{ ...headings.h1s, color: primaryColor }}>{languages.register}</Text>
					</View>

					<View>
						<InputField
							lable={languages.firstname}
							icon={<Feather name="user" size={20} color={Colors.gray} />}
							value={fullname}
							onChange={(txt) => {
								setFullname(txt);
							}}
						/>
						<InputField
							lable={languages.phone}
							lefticon={<Text onPress={() => {
								setShow(true);
								// myref2.current.open()
							  }}>{countryFlag} {countryCode}</Text>}
							icon={<Feather name="phone" size={20} color={Colors.gray} />}
							
						/>
						<CountryPicker
        show={show}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
		  setCountryFlag(item.flag)
		  console.log('here.....', item);
          setShow(false);
        }}
      />
	  
					

						

						<InputField
							ref={myref1}
							oniconPress={() => toggleSecure(myref1)}
							isSecure={true}
							lable="Password"
							icon={<Feather name="lock" size={20} color={Colors.gray} />}
							
						/>

						<InputField
							isSecure={true}
							ref={myref}
							oniconPress={() => toggleSecure(myref)}
							lable="Confirm Password"
							icon={<Feather name="lock" size={20} color={Colors.gray} />}
							
						/>
						<View style={{  ...styles.container }}>
					<CurrencyPicker
							//   currencyPickerRef={myref2}
							enable={true}
							darkMode={false}
							currencyCode={currencyCode}
							showFlag={true}
							showCurrencyName={true}
							showCurrencyCode={true}
							onSelectCurrency={(data) => { setCurrencyCode(data.code) }}
							onOpen={() => {console.log("Open")}}
							onClose={() => {console.log("Close")}}
							showNativeSymbol={false}
							showSymbol={false}
							containerStyle={{
								// container: {},
								flagWidth: 25,
								
								currencyCodeStyle: {...headings.h7,color:Colors.gray},
								currencyNameStyle: {...headings.h7,color:Colors.gray}
							}}
							modalStyle={{
								container: {},
								searchStyle: {},
								tileStyle: {},
								itemStyle: {
									itemContainer: {},
									flagWidth: 25,
									currencyCodeStyle: {},
									currencyNameStyle: {},
									symbolStyle: {},
									symbolNativeStyle: {}
								}
							}}
							//   title={""}
							searchPlaceholder={"Search"}
							showCloseButton={false}
							showModalTitle={false}
							/>
            
            
        				</View>

						<View style={{ marginHorizontal: 35 }}>
							<Mycheckbox
								onPress={(val) => {
									setIsPolicyChecked(!isPolicyChecked );
								}}
								text={languages.iagreeterms}
							/>
						</View>

						<View style={{ marginBottom: 20, marginTop: 30 }}>
							<Btn1
								lableStyle={{ ...headings.h6M, color: white }}
								lable={languages.register}
								// onPress={() => {
								// 	this.signUpValidation()
								// }}
							/>
						</View>
					</View>
				</ScrollView>
			</View>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightgrey,
        marginVertical: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.lightgrey,
        borderRadius: 8,
        flexDirection: 'row',
        paddingHorizontal: 15,
		paddingVertical:15,
		justifyContent:'center'
    }
})