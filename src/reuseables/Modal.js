import React, { createRef, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";
import Modal from "react-native-modal";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import languages from "../assets/languages/English.json";
import { primaryColor, secondryColor, textColor, headings, shadow, transparent, primaryColorDim, white, container, Colors } from '../utils/Styles';
import IconHeader from "./IconHeader";
import { heightPercentageToDP } from "react-native-responsive-screen";
const ReactModal = React.forwardRef((props, ref) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [icon, seticon] = useState('left')
    const toggleModal = () => {
      
        setModalVisible(!isModalVisible);
    };
    useImperativeHandle(ref, () => ({
        toggleModal
    }));
    return (
        <View style={{ ...container.empty,...props.containerStyle }}>
            {/* <Button title="Show modal" onPress={toggleModal} /> */}
            <Modal isVisible={isModalVisible}
            // style={{flex:1}}
                // swipeDirection={['left', 'right']}
                onBackdropPress={toggleModal}
                backdropOpacity={0.6}
                // coverScreen={true}
                backdropColor={Colors.gray}
                onBackButtonPress={toggleModal}
                onSwipeComplete={toggleModal}
                animationIn={props.animationIn}
                animationOut={props.animationOut}
                animationInTiming={500}
                animationOutTiming={500}
                backdropTransitionInTiming={500}
          backdropTransitionOutTiming={500}
            >
                {/* <View style={{flex:1,top:heightPercentageToDP(10)}}>
                <IconHeader
				// lable2='Search'
				// containerStyle={styles.header}
				
					rightBtn={
						<Ionicons
                        onPress={toggleModal}
							size={20}
							name="chevron-down"
							color={primaryColor}
                            
							
						/>
					}
				/> */}
                {props.view}
                {/* </View> */}
            </Modal>
        </View >
    )
})

export default ReactModal;