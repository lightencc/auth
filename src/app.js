import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

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
                <LoginForm />
            </View>
        );
    }
}

export default App;
