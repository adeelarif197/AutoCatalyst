import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors, headings, primaryColor, white } from '../utils/Styles'
import { widthPercentageToDP as WP, heightPercentageToDP as HP} from 'react-native-responsive-screen';

// props=> containerStyle:<styleObject>, lable:<String>, lableStyle:<styleObject>, onPress:<fun>

export default class Btn2 extends Component {
    render() {
        const { containerStyle, icon, lableStyle, onPress } = this.props
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                <View style={{ ...styles.container, ...containerStyle }}>
                    {icon}
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: primaryColor,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // marginHorizontal: 30,
        borderRadius: 8,
        
    }
})