import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import HeaderWithAction from '../../components/HeaderWithAction';
import CreditCard from '../../components/CreditCard';
import { Container, CardContainer } from './styles';
import { Header } from 'react-native-elements';

export default class CardView extends Component {
	render() {
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
					leftComponent={{ icon: 'menu', color: '#dedee5' }}
					rightComponent={{ icon: 'home', color: '#dedee5' }}
				/>

				<HeaderWithAction title="Cards" />

				<CardContainer horizontal>
					<CreditCard
						number="**** **** **** 7427"
						holder="Bryan Baker"
						expiry="03/20/2017"
					/>
					<CreditCard
						number="**** **** **** 5512"
						holder="Homer Simpson"
						expiry="03/20/2017"
					/>

					<CreditCard
						number="**** **** **** 6136"
						holder="Tom Spacey"
						expiry="03/20/2017"
					/>
					<CreditCard
						number="**** **** **** 1348"
						holder="Clyve Barker"
						expiry="03/20/2017"
					/>
				</CardContainer>
			</Container>
		);
	}
}
