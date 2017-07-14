import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Page2 extends Component {
    static displayName = 'Page2'

    render() {
        return (
            <View style={styles.main}>
                <Button title="BACK" onPress={ () => {
                    this.context.navigator.pop()
                }} />
            </View>
        );
    }
}

export default Page2;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange'
    }
})