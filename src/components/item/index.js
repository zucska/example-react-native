import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Item extends Component {
    render() {
        const { data } = this.props
        return (
            <View style={{ flex: 1, height: 40, paddingHorizontal: 20 }}>
                <Text>{data.title}</Text>
            </View>
        );
    }
}

export default Item