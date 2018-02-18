import styled from 'styled-components';

export const Column = styled.View`
	flex-direction: column;
`;
export const Row = styled.View`
	flex-direction: row;
	justify-content: ${({justify = 'center'})=> justify};
	align-items: ${({align = 'center'})=> align};
	padding: ${({padding = '0'})=> padding+'px'};
`;