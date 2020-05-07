import React, { useState, useContext } from 'react';
import authenticationService from '../../../services/authentication.service';
import { Ctx } from '../../../Store';
import rAPService from '../../../services/requestsApi.service';
import Button from '@material-ui/core/Button';
import Input from '../../Input/Input';

const LogBar = () => {
	const [userName, setUserName] = useState();
	const [password, setPassword] = useState();
	const [statusLoad, setstatusLoad] = useState(false);
	const { store, setUser, setAllowedCities, setAllCities } = useContext(Ctx);
	const auth = new authenticationService({
		url: store.apiUrl
	});

	const logIn = async () => {
		setstatusLoad(true);
		setTimeout(() => {
			auth.login(userName, password).then(el => {
				if (el.status) {
					const request = new rAPService({ url: store.apiUrl });
					if (el.data.allowedCities)
						setAllowedCities(el.data.allowedCities.map(item => {
							item.value = item.id;
							item.label = item.name;
							return item;
						}));
					setUser(el.data.user);
					request.getAllCitiesList().then(el => setAllCities(el.data.cityList));
				} else {
					alert('Неверный логин или пароль');
					setstatusLoad(false);
				}
			});
		}, 2000);
	};

	const onButtonClick = () => {
		setstatusLoad(true);
		logIn();
	}

	const handleSignInClick = () => {

	}

	const onInputPress = (e) => {
		if (e.key === "Enter")
			onButtonClick();
	}

	console.log(password);


	return (
		<div className='logBar'>
			<h1 className='logBar_logo'>Tetra Cube</h1>
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
				autoComplete="current-password"
				value={password}
				onChange={setPassword}
				onKeyPress={onInputPress}
				variant="outlined"
			/>
			<Button onClick={handleSignInClick} variant="contained" color="primary" disableElevation>
				Вход
    	</Button>
			<p className='logBar_desription'>
				Для получения доступа в личный кабинет свяжитесь с
				нами по следующим контактам:
			</p>
		</div>
	);
};

export default LogBar;
