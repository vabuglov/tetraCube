import React from 'react';
import Loader from 'react-spinners/RingLoader';
import { css } from '@emotion/core';

/*
	**STATES

	value = text
	type = primary | secondary | danger
	observe = {
					status: true | false,
					variable: var
				}
	onClick = function()
	
*/

const override = css`
	display: block;
	margin: 0 auto;
	border-color: red;
`;

const ButtonText = props => {
	let buttonClass = 'buttonText';
	let buttonValue = props.value;
	if (props.type) buttonClass += ' buttonText_' + props.type;
	else buttonClass += ' buttonText_secondary';
	buttonClass += ' ' + props.className;
	if (props.observe && props.observe.status) {
		const fetchData = Object.keys(props.observe.variable).length;
		if (!fetchData)
			buttonValue = (
				<Loader css={override} size={30} color={'white'} loading={true} />
			);
	}
	if (props.disabled)
		buttonClass += " disabled";
	else buttonClass += " buttonText_enabled";


	return (
		<>
			<button onClick={props.disabled ? () => { } : props.onClick} className={buttonClass}>
				{buttonValue}
			</button>
		</>
	);
};

export default ButtonText;
