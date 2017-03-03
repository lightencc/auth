import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDhqaGkftqpZDP5_MqPNdDNnn_rlq_v5bk',
            authDomain: 'auth-fa3e1.firebaseapp.com',
            databaseURL: 'https://auth-fa3e1.firebaseio.com',
            storageBucket: 'auth-fa3e1.appspot.com',
            messagingSenderId: '197730301911'
        });

        firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.setState({ loggedIn: true });
                } else {
                    this.setState({ loggedIn: false });
                }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                 <Card>
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                 </Card>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                <Card>
                    <CardSection>
                        <Spinner size="large" />
                    </CardSection>
                </Card>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                    {this.renderContent()}
            </View>
        );
    }
}

export default App;
