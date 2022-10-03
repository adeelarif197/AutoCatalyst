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



import SearchScreen from './src/auth_screens/SearchScreen';
// Home_Screens
import Services from './src/home_screens/Services';
import Credits from './src/home_screens/Credits';

// Drawer_Screens


// Libraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListScreen from './src/auth_screens/ListScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductScreen from './src/auth_screens/ProductScreen';
import { Colors, primaryColor } from './src/utils/Styles';


// Redux
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { persistor, store } from './src/Redux/Store';
import Profile from './src/home_screens/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
	  <Tab.Navigator
	//   screenOptions={{headerShown: false}}
	screenOptions={({ route }) => ({
		tabBarActiveTintColor: primaryColor,
		tabBarInactiveTintColor: Colors.gray,
		headerShown:false
	  })}
	  

	  >
		<Tab.Screen name="ListScreen" component={Services} 
		options={{
			tabBarLabel: 'Home',
			tabBarIcon: ({ color, size, focused}) => (
			  <Ionicons name="home" color={focused== true? primaryColor: Colors.gray} size={size} />
			),
		  }}
		/>
		<Tab.Screen name="Explore" component={ListScreen} 
		options={{
			tabBarLabel: 'Explore',
			tabBarIcon: ({ focused,color, size }) => (
			  <Ionicons name="search" color={focused== true? primaryColor: Colors.gray} size={size} />
			),
		  }}/>
		  <Tab.Screen name="Brands" component={ListScreen} 
		options={{
			tabBarLabel: 'Brands',
			tabBarIcon: ({ focused,color, size }) => (
			  <Entypo name="back-in-time" color={focused== true? primaryColor: Colors.gray} size={size} />
			),
		  }}/>
		<Tab.Screen name="Credits" component={Credits} 
		options={{
			tabBarLabel: 'Credits',
			tabBarIcon: ({ color, size,focused }) => (
			  <Ionicons name="server-sharp" color={focused== true? primaryColor: Colors.gray} size={size} />
			),
		  }}/>
		<Tab.Screen name="Profile" component={Profile} 
		options={{
			tabBarLabel: 'Profile',
			tabBarIcon: ({ color, size,focused}) => (
			  <Ionicons name="person-circle-sharp" color={focused== true? primaryColor: Colors.gray} size={size} />
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
		<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
		<NavigationContainer>
			<Stack.Navigator   screenOptions={{ headerShown: false }}>
				
				<Stack.Screen name="Splash" component={Splash} />
				<Stack.Screen name="OnBoardingScreens" component={OnBoardingScreens} />
				
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="SignUp" component={SignUp} />
				<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
				<Stack.Screen name="OTPScreen" component={OTPScreen} />
				
				<Stack.Screen name="Home" component={MyTabs} />
				<Stack.Screen name="HomeA" component={Services} />
				
				<Stack.Screen name="SearchScreen" component={SearchScreen} />
				{/* <Stack.Screen name="MyTabs" component={MyTabs} /> */}
				<Stack.Screen name="ProductScreen" component={ProductScreen} />
			</Stack.Navigator>
		</NavigationContainer>
		</SafeAreaProvider>
      </PersistGate>
    </Provider>
	);
};
export default App;
