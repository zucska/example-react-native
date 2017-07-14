import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { ZNavigator } from 'zreact-components'
import Home from '../pages/home';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';


class App extends Component {
    render() {
        const leftButton = <Text> BACK</Text>
        return (
            <ZNavigator leftButton={leftButton}>
                <Home hideNav />
                <Page1 />
                <Page2 title="Page2" />
            </ZNavigator>
        );
    }
}

export default App;