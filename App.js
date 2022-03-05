import React, { useState, useEffect } from 'react';
import FIcons from 'react-native-vector-icons/Feather';
import 'react-native-gesture-handler';

// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// Auth_Screens
import Splash from './src/auth_screens/Splash';
import OnBoardingScreens from './src/auth_screens/OnBoardingScreens';
import Login from './src/auth_screens/Login';
import SignUp from './src/auth_screens/SignUp';
import ForgotPassword from './src/auth_screens/ForgotPassword';
import OTPScreen from './src/auth_screens/OTPScreen';
import CreateNewPassword from './src/auth_screens/CreateNewPassword';
import WelcomeScreen from './src/auth_screens/WelcomeScreen';
import Congrats from './src/auth_screens/Congrats';
import NotAvailable from './src/auth_screens/NotAvailable';
// Home_Screens
import Services from './src/home_screens/Services';
import AvailableMechanics from './src/home_screens/AvailableMechanics';
import MechanicView from './src/reuseables/MechanicView';
import MechanicInfo from './src/home_screens/MechanicInfo';
import Inquire from './src/home_screens/Inquire';
import BookingMechanic from './src/home_screens/BookingMechanic';
import Checkout from './src/home_screens/Checkout';
import Credits from './src/home_screens/Credits';
// Drawer_Screens
import Contact from './src/drawer_screens/Contact';
import Story from './src/drawer_screens/Story';

// Libraries
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// function MyDrawer() {
// 	return (
// 		<Drawer.Navigator
// 			// drawerContent={(props) => <CustomDrawerContent {...props} />}
// 			// screenOptions={{
// 			// 	headerShown: false,
// 			// 	drawerLabelStyle: [textFont, { fontSize: 14 }],
// 			// 	// activeBackgroundColor: MyUtils.hexToRgbA(primaryColor, 0.2),
// 			// 	drawerActiveTintColor: primaryColor,
// 			// 	drawerInactiveTintColor: Colors.gray,
// 			// 	drawerItemStyle: { marginVertical: 1, marginHorizontal: 0, paddingHorizontal: 5 },
// 			// 	drawerContentContainerStyle: { paddingTop: 0 }
// 			// }}
// 		>
// 			<Drawer.Screen
// 				name="Services"
// 				component={Services}
// 				options={{ drawerIcon: (props) => <FIcons name={'home'} color={'grey'} size={20} /> }}
// 			/>
// 			<Drawer.Screen
// 				name="Contact"
// 				component={Contact}
// 				options={{ drawerIcon: (props) => <FIcons name={'user'} color={'grey'} size={20} /> }}
// 			/>
// 				<Drawer.Screen
// 				name="Story"
// 				component={Story}
// 				options={{ drawerIcon: (props) => <FIcons name={'user'} color={'grey'} size={20} /> }}
// 			/>
// 		</Drawer.Navigator>
// 	);
// }

const App = () => {
	const [ isFirstLaunch, setIsFirstLaunch ] = useState(null);
	let routeName;

	useEffect(() => {
		AsyncStorage.getItem('alreadyLaunched').then((value) => {
			if (value == null) {
				AsyncStorage.setItem('alreadyLaunched', 'true');
				setIsFirstLaunch(true);
			} else {
				setIsFirstLaunch(false);
			}
		});
	}, []);
	if (isFirstLaunch === null) {
		return null;
	} else if (isFirstLaunch == true) {
		routeName = 'OnBoardingScreens';
	} else {
		routeName = 'Login';
	}
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{/* <Stack.Screen name="Services" component={MyDrawer} /> */}
				<Stack.Screen name="Splash" component={Splash} />
				<Stack.Screen name="OnBoardingScreens" component={OnBoardingScreens} />
				<Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="SignUp" component={SignUp} />
				<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
				<Stack.Screen name="OTPScreen" component={OTPScreen} />
				<Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
				<Stack.Screen name="Congrats" component={Congrats} />
				<Stack.Screen name="NotAvailable" component={NotAvailable} />
				<Stack.Screen name="Services" component={Services} />
				<Stack.Screen name="AvailableMechanics" component={AvailableMechanics} />
				<Stack.Screen name="MechanicView" component={MechanicView} />
				<Stack.Screen name="MechanicInfo" component={MechanicInfo} />
				<Stack.Screen name="Inquire" component={Inquire} />
				<Stack.Screen name="BookingMechanic" component={BookingMechanic} />
				<Stack.Screen name="Checkout" component={Checkout} />
				<Stack.Screen name="Credits" component={Credits} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default App;
