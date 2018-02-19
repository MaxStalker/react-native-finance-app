import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import SingleItem from './SingleIem';

export default class SpendingList extends Component {
	render() {
		const { items } = this.props;
		return (
			<View>
				{items.map((item, i) => {
					return <SingleItem key={i} index={i} {...item} />;
				})}
			</View>
		);
	}
}
