import React from 'react';
import styled from 'styled-components';
import { Column } from '../Common';
import { LIGHT_GREY, RED } from '../../theme/colors';

export const ChainContainer = Column.extend`
	width: 60px;
	height: 50px;
	align-items: center;
`;

export const Line = styled.View`
	width: 2px;
	flex: 1;
	background-color: ${LIGHT_GREY};
`;

export const CircleContainer = styled.View`
	width: 12px;
	height: 12px;
	border-radius: 20px;
	border-width: 2px;
	border-color: ${LIGHT_GREY};
	background-color: transparent;
`;

export const CircleInset = styled.View`
	position: absolute;
	width: 10px;
	height: 10px;
	border-radius: 10px;
	top: 3px;
	left: 3px;
	background-color: ${LIGHT_GREY};
`;

export default () => {
	return (
		<ChainContainer>
			<Line />
			<CircleContainer>
				<CircleInset />
			</CircleContainer>
			<Line />
		</ChainContainer>
	);
};
