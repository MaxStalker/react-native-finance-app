import styled from 'styled-components';
import {ScrollView} from 'react-native';

export const Container = styled.View`
	flex: 1;
	align-content: center; 
	justify-content: flex-start;
`;

export const CardContainer = styled.ScrollView.attrs({
	contentContainerStyle: props => {
		return {
			alignItems: 'flex-start',
			justifyContent: 'center'
		}
	}
})``;