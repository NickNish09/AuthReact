import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Spinner, Header, CardSection, Div } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

	state = { loggedIn: null };

	componentWillMount(){ //metodo invocado automaticamente antes do render
		firebase.initializeApp({
		    apiKey: 'AIzaSyBjxcm2hNhrq0r2u2o08Yb3KuUAfSTebNk',
		    authDomain: 'authentication-5ac4f.firebaseapp.com',
		    databaseURL: 'https://authentication-5ac4f.firebaseio.com',
		    projectId: 'authentication-5ac4f',
		    storageBucket: 'authentication-5ac4f.appspot.com',
		    messagingSenderId: '871435131630'
  		});

  		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
  		});
	}

	renderContent(){
		switch (this.state.loggedIn) {
			case true:
				return (
					<Div>	
						<Button onPress={() => firebase.auth().signOut()}>
							Log Out
						</Button>
					</Div>
				);
			case false:
				return <LoginForm />;
			default:
				return <Div><Spinner size="large" /></Div>;
		}
	}
	render() {
		return (
			<View>
				<Header headerText="Authentication"/>
				
				{this.renderContent()}
			</View>
		);
	}
};

export default App;