import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors, headings, primaryColor, white } from '../utils/Styles'
import Feather from 'react-native-vector-icons/Feather';
import { heightPercentageToDP } from 'react-native-responsive-screen';

// props=> containerStyle:<styleObject>, lable:<String>, lableStyle:<styleObject>, onPress:<fun>

export default class OfferBullet extends Component {
    render() {
        const { text } = this.props
        return (
            <View style={{...styles.offerTitle,justifyContent:'flex-start'}}>
                <Feather
							size={16}
							name="check-circle"
							color={primaryColor}
							// style={{ left: 20, top: 20 }}
						/>
                        <Text  style={{...headings.h7M,marginLeft:10,letterSpacing:0.6}}>{text}</Text>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: primaryColor,
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30,
        borderRadius: 8,
        
    },
    offerTitle:{  
        marginTop:heightPercentageToDP('2.5%'),
        alignItems: 'center',
        width:'80%' ,
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
})