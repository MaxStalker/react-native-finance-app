import React from 'react';
import styled from 'styled-components';
import { Column } from '../Common';
import { DARK_GREY } from '../../theme/colors';

export const ChainContainer = Column.extend`
	padding-left: 30px;
	padding-right: 15px;
	align-items: center;
	justify-content: center;
`;

export const Line = styled.View`
	width: 2px;
	background-color: ${({ index, first }) =>
		index === 0 && first ? 'rgba(0,0,0,0)' : DARK_GREY};
	flex: ${({ flexValue }) => (flexValue ? flexValue : 1)}};
`;

export const CircleContainer = styled.View`
	width: 14px;
	height: 14px;
	border-radius: 20px;
	border-width: 2px;
	border-color: ${DARK_GREY};
	background-color: transparent;
`;

export const CircleInset = styled.View`
	position: absolute;
	width: 6px;
	height: 6px;
	border-radius: 10px;
	top: 2px;
	left: 2px;
	background-color: ${DARK_GREY};
`;

export default ({ number }) => {
	return (
		<ChainContainer>
			<Line flexValue={0.5} index={number} first />
			<CircleContainer>
				<CircleInset />
			</CircleContainer>
			<Line />
		</ChainContainer>
	);
};
