import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo';

import styled from 'styled-components';
import {TRANSPARENT_GREY} from "../../theme/colors";

const containerHeight = 200;

export const ItemContainer = styled.View`
	width: 70px;
	height: ${containerHeight}px;
	display: flex;
	padding: 10px;
	background-color: transparent;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border-color: ${TRANSPARENT_GREY};
	border-width: 0;
	border-right-width: 1;
`;

export const ActiveItemContainer = ItemContainer.extend`
	background-color: #ffffff;
	border-right-width: 0;
	border-top-left-radius: 2;
	border-top-right-radius: 2;
	shadow-color: rgba(0,0,0,0.25);
	shadow-offset: 0 5px;
	shadow-opacity: 1;
	shadow-radius: 5px;
	z-index: 3;
`;

export const ItemFill = styled.View`
	position: absolute;
	background-color: ${({ active }) =>
		active ? 'rgba(255, 0, 0, 1)' : 'rgba(120, 120, 120, 0.5)'};
	bottom: 0;
	right: 0;
	left: 0;
	top: ${({ itemHeight }) => (containerHeight*(100-itemHeight)/100)};
`;

export const ActiveItemFill = styled(LinearGradient)`
	position: absolute;
	background-color: ${({ active }) =>
		active ? 'rgba(255, 0, 0, 1)' : 'rgba(120, 120, 120, 0.5)'};
	bottom: 0;
	right: 0;
	left: 0;
	top: ${({ itemHeight }) => (containerHeight*(100-itemHeight)/100)};
`;

export const ItemDayLabel = styled.Text`
	color: #fff;
	font-size: 12px;
	z-index: 2;
`;

export const ActiveItemDayLabel = ItemDayLabel.extend`
	color: rgb(150,150,150);
`;

export const ItemSpending = styled.Text`
	color: #fff;
	font-size: 12px;
	z-index: 2;
`;

export default class extends Component {
	render() {
		const { day, spending, fillHeight, active, action } = this.props;
		return (
			<TouchableWithoutFeedback onPress={action}>
				{active ? (
					<ActiveItemContainer>
						<ActiveItemDayLabel>{day}</ActiveItemDayLabel>
						{active && <ItemSpending>{spending}</ItemSpending>}
						<ActiveItemFill
							colors={['#8AC750', '#AED48B']}
							start={[0, 1]}
							end={[0, 0]}
							itemHeight={fillHeight}
						/>
					</ActiveItemContainer>
				) : (
					<ItemContainer>
						<ItemDayLabel>{day}</ItemDayLabel>
						{active && <ItemSpending>{spending}</ItemSpending>}
						<ItemFill active={active} itemHeight={fillHeight} />
					</ItemContainer>
				)}
			</TouchableWithoutFeedback>
		);
	}
}
