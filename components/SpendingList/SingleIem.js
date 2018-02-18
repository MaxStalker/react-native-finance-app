import React, {Component} from 'react';
import {View} from 'react-native';
import {SpendingName, SpendingValue, TimeDateStamp} from "./styles";
import {Column, Row} from '../Common';
import TimelineChain from '../TimelineChain';

export default class SingleIem extends Component{
	render(){
		const {name, time, date, value} = this.props;
		return(
			<Row justify={"space-between"}>
				<TimelineChain/>
				<Column>
					<SpendingName>{name}</SpendingName>
					<TimeDateStamp>{time}</TimeDateStamp>
				</Column>
				<Column>
					<SpendingValue>{value}</SpendingValue>
					<TimeDateStamp>{date}</TimeDateStamp>
				</Column>
			</Row>
		)
	}
}