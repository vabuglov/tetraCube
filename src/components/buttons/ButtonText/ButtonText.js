import React from 'react';
import Loader from 'react-spinners/RingLoader';
import { Button } from '@material-ui/core';
import commonFunctions from '../../../services/commonFunctions.service';


const ButtonText = props => {
	const commonFuncs = new commonFunctions();

	const getMaterialButtonProps = () => {
		const propsKeys = Object.keys(props);
		let answer = {};
		const arrayTrueKeys = propsKeys.map(element => {
			const badKeys = ["loading", "className"];
			if (badKeys.indexOf(element) > -1) {
				return null;
			}
			return element;
		}).filter(el => el);
		for (let i = 0; i < arrayTrueKeys.length; i++) {
			answer[arrayTrueKeys[i]] = props[arrayTrueKeys[i]];
		}
		return answer;
	}

	const materialButtonProps = getMaterialButtonProps();

	const getTitleChilder = () => {
		const spinner = (<Loader
			size={40}
			color={"white"}
			loading={true}
		/>);
		if (props.loading) {
			return spinner
		}
		return props.children;
	}

	const buttonClass = commonFuncs.getComponentClass("buttonText", props.className);

	return (
		<div className={buttonClass}>
			<Button  {...materialButtonProps}>
				{getTitleChilder()}
			</Button>
		</div>
	);
};

export default ButtonText;
