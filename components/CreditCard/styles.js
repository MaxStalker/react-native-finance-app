import styled from 'styled-components';
import { LinearGradient } from 'expo';

export const ShadowContainer = styled.View`
	max-height: 200;
	width: 320;
	shadow-color: 'rgba(0,0,0,0.25)';
	shadow-opacity: 0.5;
	shadow-radius: 5;
	shadow-offset: 0px 5px;
	margin-right: 10;
	margin-left: 10;
	border-radius: 8;
`;

export const CardContainer = styled(LinearGradient)`
	flex: 1;
	padding: 20px;
	flex-direction: column;
	border-radius: 6;
`;

export const CardNumber = styled.Text`
	color: #FFF;
	font-size: 28px;
	padding: 20px;
`;

export const VisaLogo = styled.Text`
	font-family: fa-brands;
	font-size: 32px;
	color: #fff;
`;

export const CardInfo = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: space-between;
`;

export const Label = styled.Text`
	color: #9c9fa9;
	font-size: 12px;
`;

export const Value = styled.Text`
	color: #ffffff;
	font-size: 16px;
	padding-top: 4px;
	padding-bottom: 4px;
`;
