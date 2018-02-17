import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import {
	ShadowContainer,
	CardContainer,
	VisaLogo,
	CardNumber,
	CardInfo,
	Label,
	Value
} from './styles';
export default class extends Component {
	state = {
		fontLoaded: false
	};

	async componentDidMount() {
		await Font.loadAsync({
			'fa-brands': require('../../assets/fonts/fa-brands-400.ttf')
		});
		this.setState({ fontLoaded: true });
	}

	render() {
		const { fontLoaded } = this.state;
		const { number, holder, expiry } = this.props;
		return (
			<ShadowContainer>
				<CardContainer
					colors={['#898c9b', '#4d5061']}
					start={[0, 0]}
					end={[1, 1]}
				>
					{fontLoaded && <VisaLogo>&#xf1f0;</VisaLogo>}
					<CardNumber>{number}</CardNumber>
					<CardInfo>
						<View>
							<Label>Card Holder</Label>
							<Value>{holder}</Value>
						</View>
						<View>
							<Label>Expiry</Label>
							<Value>{expiry}</Value>
						</View>
					</CardInfo>
				</CardContainer>
			</ShadowContainer>
		);
	}
}
