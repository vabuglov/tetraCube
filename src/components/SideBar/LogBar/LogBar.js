import React, { useState, useContext } from 'react';
import authenticationService from '../../../services/authentication.service';
import { Ctx } from '../../../Store';
import Input from '../../Input/Input';
import ButtonText from '../../buttons/ButtonText/ButtonText';
import commonFunctions from '../../../services/commonFunctions.service';

const LogBar = () => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [authRequest, setAuthRequest] = useState(false);
	const { setUser } = useContext(Ctx);
	const commonFuncs = new commonFunctions();
	const apiUrl = commonFuncs.getApiUrl();
	const auth = new authenticationService({ apiUrl });


	const logIn = async () => {
		auth.login(userName, password).then(el => {
			if (el.status) {
				setUser(el.data.user);
			} else {
				alert('Неверный логин или пароль');
			}
			setAuthRequest(false);
		});
	};

	const handleSignInClick = () => {
		setAuthRequest(true);
		logIn();
	}

	const onInputPress = (e) => {
		if (e.key === "Enter")
			handleSignInClick();
	}

	return (
		<div className='logBar'>
			<h1 className='logBar_logo'>TetraCube</h1>
			<Input
				name='username'
				label='Логин'
				className='mb2'
				value={userName}
				onChange={setUserName}
				onKeyPress={onInputPress}
				variant="outlined"
			/>
			<Input
				label="Password"
				type="password"
				className='mb2'
				autoComplete="current-password"
				value={password}
				onChange={setPassword}
				onKeyPress={onInputPress}
				variant="outlined"
			/>
			<ButtonText className="logBar_button" onClick={handleSignInClick} variant="contained" color="primary" disableElevation loading={authRequest}>
				Вход
    	</ButtonText>
			<p className='logBar_desription'>
				Вас приветсвует личный кабинет лаборатории: «Промышленные системы потоковой обработки данных»
			</p>
			<p className='logBar_desription'>
				Центра НТИ Санкт-Петербургского политехнического университета Петра Великого
			</p>
		</div>
	);
};

export default LogBar;
