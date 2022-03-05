import { Text, View } from 'react-native';
import { container, headings, primaryColor } from '../utils/Styles';
import IconHeader from '../reuseables/IconHeader';
import languages from '../assets/languages/English.json';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { useNavigation } from '@react-navigation/native';

export default function Inquire() {
	const [ messages, setMessages ] = useState([]);
	const navigation = useNavigation();
	useEffect(() => {
		setMessages([
			{
				_id: 1,
				text: 'Hi! This is Bashir',
				createdAt: new Date(),
				user: {
					_id: 2,
					name: 'React Native',
					avatar: 'https://placeimg.com/140/140/any'
				}
			}
		]);
	}, []);

	const onSend = useCallback((messages = []) => {
		setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
	}, []);

	return (
	
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<View style={{ flexDirection: 'row', padding: 20 }}>
				<IconHeader
					onleftPress={() => {
					navigation.goBack();
					}}
					leftBtn={<AntDesign size={25} name="arrowleft" color={primaryColor} />}
				/>
				<Text style={{ ...headings.h5M, color: primaryColor, top: 5, left: 10 }}>{languages.inquire}</Text>
			</View>

			<GiftedChat
				messages={messages}
				textInputStyle={{ color: 'black' }}
				onSend={(messages) => onSend(messages)}
				user={{
					_id: 1
				}}
			/>
		</View>
	);
}
