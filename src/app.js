import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
	componentWillMount(){ //metodo invocado automaticamente antes do render
		firebase.initializeApp({
		    apiKey: 'AIzaSyBjxcm2hNhrq0r2u2o08Yb3KuUAfSTebNk',
		    authDomain: 'authentication-5ac4f.firebaseapp.com',
		    databaseURL: 'https://authentication-5ac4f.firebaseio.com',
		    projectId: 'authentication-5ac4f',
		    storageBucket: 'authentication-5ac4f.appspot.com',
		    messagingSenderId: '871435131630'
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