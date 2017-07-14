import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Home extends Component {
    static displayName = 'Home'

    constructor(props) {
        super(props)

        this.goPage = this.goPage.bind(this);
    }

    goPage(name) {
        this.context.navigator.push({ name })
    }

    render() {
        return (
            <View style={styles.main}>
                <Button title="Page 1" onPress={this.goPage.bind(this, 'Page1')} />
                <Button title="Page 2" onPress={this.goPage.bind(this, 'Page2')} />
            </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    main: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee'
    }
})