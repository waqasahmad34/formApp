import React, { Fragment } from 'react';
import Profile from './src/screens/Profile/Profile';
import UpdateForm from './src/screens/UpdateForm/UpdateForm';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const stackNavigator = createStackNavigator({
	UpdateForm: {
		screen: UpdateForm,
		navigationOptions: {
			header: null
		}
	},
	Profile: {
		screen: Profile,
		navigationOptions: {
			header: null
		}
	}
});

const AppContainer = createAppContainer(stackNavigator);

const App = () => {
	return <AppContainer />;
};

export default App;
