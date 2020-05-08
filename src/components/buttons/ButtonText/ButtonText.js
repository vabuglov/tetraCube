import React from 'react';
import Loader from 'react-spinners/RingLoader';
import { Button } from '@material-ui/core';
import commonFunctions from '../../../services/commonFunctions.service';


const ButtonText = props => {
	const commonFuncs = new commonFunctions();

	const getTitleChilder = () => {
		const spinner = (<Loader
			size={40}
			color={"white"}
			loading
		/>);
		if (props.loading) {
			return spinner
		}
		return "Вход";
	}

	const buttonClass = commonFuncs.getComponentClass("buttonText", props.className);

	return (
		<div className={buttonClass}>
			<Button  {...props}>
				{getTitleChilder()}
			</Button>
		</div>
	);
};

export default ButtonText;
