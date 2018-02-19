import React, { Component } from 'react';
import { View } from 'react-native';
import { SpendingName, SpendingValue, TimeDateStamp } from './styles';
import { Column, Row } from '../Common';
import TimelineChain from '../TimelineChain';

export default class SingleIem extends Component {
	render() {
		const { name, time, date, value, change, index} = this.props;
		return (
			<Row justify={'flex-start'}>
				<TimelineChain number={index}/>
				<Row justify="space-between" flex={1} padding={10} paddingRight={10}>
					<Column align={'flex-start'}>
						<SpendingName>{name}</SpendingName>
						<TimeDateStamp>{time}</TimeDateStamp>
					</Column>
					<Column align={'flex-end'}>
						<SpendingValue sign={change}>{value}</SpendingValue>
						<TimeDateStamp>{date}</TimeDateStamp>
					</Column>
				</Row>
			</Row>
		);
	}
}
