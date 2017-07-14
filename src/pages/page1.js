import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ZList, ZRest } from 'zreact-components'

import Item from '../components/item'

class Page1 extends Component {
    static displayName = 'Page1'

    constructor(props) {
        super(props)

        this.state = {
            items: []
        }

    }

    render() {
        return (
            <View style={styles.main}>
                <ZRest uri="https://jsonplaceholder.typicode.com/posts" onLoad={(err, items) => this.setState({ items })} />
                <ZList items={this.state.items}>
                    <Item />
                </ZList>
            </View>
        );
    }
}

export default Page1;


const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    }
})