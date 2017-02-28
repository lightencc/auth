import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDhqaGkftqpZDP5_MqPNdDNnn_rlq_v5bk',
            authDomain: 'auth-fa3e1.firebaseapp.com',
            databaseURL: 'https://auth-fa3e1.firebaseio.com',
            storageBucket: 'auth-fa3e1.appspot.com',
            messagingSenderId: '197730301911'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>An App!</Text>
            </View>
        );
    }
}

export default App;
