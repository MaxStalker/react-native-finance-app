import styled from 'styled-components';
import { WHITE, GREY, GREEN, RED } from '../../theme/colors';

export const SpendingName = styled.Text`
	color: ${WHITE};
	font-size: 14px;
	margin-bottom: 2px;
`;
export const SpendingValue = styled.Text`
	font-size: 18px;
	margin-bottom: 2px;
	color: ${({ sign }) => (sign === 'negative' ? RED : GREEN)};
`;

export const TimeDateStamp = styled.Text`
	color: ${GREY};
	font-size: 12px;
`;
