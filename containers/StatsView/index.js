import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
	BarContainer,
	HeaderStats,
	BalanceLabel,
	BalanceValue,
	CurrentDay
} from './styles';
import { Header } from 'react-native-elements';
import { Container } from '../CardView/styles';
import SingleItem from './SingleItem';
import SpendingList from '../../components/SpendingList';
import { items } from './mock-data';

export default class CardView extends Component {
	state = {
		active: 0
	};
	makeActive(id) {
		this.setState({ active: id });
	}
	render() {
		const { action } = this.props;
		const { active } = this.state;
		const values = items[1].cashFlow;
		return (
			<Container>
				<Header
					backgroundColor={'transparent'}
					outerContainerStyles={{
						backgroundColor: 'transparent',
						borderBottomWidth: 0,
						alignContent: 'center',
						justifyContent: 'space-between'
					}}
					leftComponent={{
						icon: 'menu',
						color: '#dedee5',
						onPress: () => action()
					}}
					rightComponent={{ icon: 'home', color: '#dedee5' }}
				/>

				<HeaderStats>
					<CurrentDay>Today, Monday, August 20</CurrentDay>
					<BalanceLabel>Your Balance</BalanceLabel>
					<BalanceValue>$5200</BalanceValue>
				</HeaderStats>

				<ScrollView>
					<BarContainer horizontal showsHorizontalScrollIndicator={false}>
						{items.map((item, i) => {
							return (
								<SingleItem
									{...item}
									active={i === active}
									action={() => this.makeActive(i)}
									key={i}
								/>
							);
						})}
					</BarContainer>
					<SpendingList items={values} />
				</ScrollView>
			</Container>
		);
	}
}
