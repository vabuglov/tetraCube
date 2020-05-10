import React, { useContext, useState } from 'react';
import { Ctx } from '../../Store';
import LogBar from './LogBar/LogBar';
import DashBoardBar from './DashBoardBar/DashBoardBar';

const SideBar = () => {
	const { store } = useContext(Ctx);
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [authRequest, setAuthRequest] = useState(false);
	const logBarData = {
		login,
		password,
		authRequest,
		setLogin,
		setPassword,
		setAuthRequest
	}



	return (
		<div className='sideBar'>
			{store.user.username &&
				localStorage.getItem('baseCode') ? (
					<DashBoardBar />
				) : (
					<LogBar logBarData={logBarData} />
				)}
		</div>
	);
};

export default SideBar;
