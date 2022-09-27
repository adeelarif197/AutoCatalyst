import React, { useState, useEffect } from 'react';
import FIcons from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
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

import WelcomeScreen from './src/auth_screens/WelcomeScreen';

import SearchScreen from './src/auth_screens/SearchScreen';
// Home_Screens
import Services from './src/home_screens/Services';

// Drawer_Screens


// Libraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListScreen from './src/auth_screens/ListScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductScreen from './src/auth_screens/ProductScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
	  <Tab.Navigator
	  screenOptions={{headerShown: false}}
	  >
		<Tab.Screen name="ListScreen" component={ListScreen} 
		options={{
			tabBarLabel: 'Home',
			tabBarIcon: ({ color, size }) => (
			  <Ionicons name="home" color={"#5E9B3E"} size={size} />
			),
		  }}
		/>
		<Tab.Screen name="History" component={ListScreen} 
		options={{
			tabBarLabel: 'History',
			tabBarIcon: ({ color, size }) => (
			  <Entypo name="back-in-time" color={"#5E9B3E"} size={size} />
			),
		  }}/>
		<Tab.Screen name="Credits" component={ListScreen} 
		options={{
			tabBarLabel: 'Credits',
			tabBarIcon: ({ color, size }) => (
			  <Ionicons name="server-sharp" color={"#5E9B3E"} size={size} />
			),
		  }}/>
		<Tab.Screen name="Profile" component={ListScreen} 
		options={{
			tabBarLabel: 'Profile',
			tabBarIcon: ({ color, size }) => (
			  <Ionicons name="person-circle-sharp" color={"#5E9B3E"} size={size} />
			),
		  }}/>
		
	  </Tab.Navigator>
	);
  }

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
				
				<Stack.Screen name="Splash" component={Splash} />
				<Stack.Screen name="OnBoardingScreens" component={OnBoardingScreens} />
				<Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="SignUp" component={SignUp} />
				<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
				<Stack.Screen name="OTPScreen" component={OTPScreen} />
				
				<Stack.Screen name="Home" component={Services} />
				
				<Stack.Screen name="SearchScreen" component={SearchScreen} />
				<Stack.Screen name="MyTabs" component={MyTabs} />
				<Stack.Screen name="ProductScreen" component={ProductScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default App;
