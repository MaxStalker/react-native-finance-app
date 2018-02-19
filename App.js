import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';
import CardView from './containers/CardView';
import StatsView from './containers/StatsView';

export default class App extends React.Component {
	state = {
		mode: 'stats-view'
	};
	render() {
		const { mode } = this.state;
		return (
			<View style={styles.container}>
				<LinearGradient colors={['#515362', '#2e2d3b']} style={[styles.box]}>
					{mode === 'card-view' ? (
						<CardView action={() => this.setState({ mode: 'stats-view' })} />
					) : (
						<StatsView action={() => this.setState({ mode: 'card-view' })} />
					)}
				</LinearGradient>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start'
	},
	headerText: {
		fontSize: 20
	},
	box: {
		position: 'absolute',
		alignItems: 'flex-start',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}
});
