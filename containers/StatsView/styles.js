import styled from 'styled-components';
import {ScrollView}from 'react-native';

export const ActiveItem = styled.View``;

export const BarContainer = styled.ScrollView.attrs({
	contentContainerStyle: props => {
		return {
			alignItems: 'flex-start',
			justifyContent: 'center'
		}
	}
})`
	flex: 1
`;

export const HeaderStats = styled.View`
	padding: 20px;
`;

export const CurrentDay = styled.Text`
	color: #ffffff;
	margin-bottom: 10px;
	font-size: 18px;
`;

export const BalanceLabel = styled.Text`
	font-size: 14px;
	color: rgb(140, 140, 140);
	margin-bottom: 15px;
`;

export const BalanceValue = styled.Text`
	font-size: 42px;
	font-weight: 700;
	color: #ffffff;
`;
