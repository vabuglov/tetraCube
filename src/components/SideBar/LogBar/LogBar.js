import React, { useContext, useEffect, useState } from 'react';
import authenticationService from '../../../services/authentication.service';
import { Ctx } from '../../../Store';
import Input from '../../Input/Input';
import ButtonText from '../../buttons/ButtonText/ButtonText';
import commonFunctions from '../../../services/commonFunctions.service';

const LogBar = () => {
	const { setUser } = useContext(Ctx);
	const commonFuncs = new commonFunctions();
	const apiUrl = commonFuncs.getApiUrl();
	const auth = new authenticationService({ apiUrl });
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [authRequest, setAuthRequest] = useState(false);

	useEffect(() => {
		return () => {
		};
	}, []);

	const handleSignInClick = async () => {
		setAuthRequest(true);
		logIn();
	};

	const onInputPress = async (e) => {
		if (e.key === "Enter")
			handleSignInClick();
	};

	const logIn = async () => {
		auth.login(login, password).then(el => {
			if (el.status) {
				setAuthRequest(false);
				setUser(el.data.user);
			} else {
				setAuthRequest(false);
				alert('Неверный логин или пароль');
			}
		});
	};


	return (
		<div className='logBar'>
			<h1 className='logBar_logo'>TetraCube</h1>
			<Input
				name='username'
				label='Логин'
				className='mb2'
				value={login}
				onChange={setLogin}
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
