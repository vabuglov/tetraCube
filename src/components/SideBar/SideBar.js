import React, { useContext } from 'react';
import { Ctx } from '../../Store';
import LogBar from './LogBar/LogBar';
import DashBoardBar from './DashBoardBar/DashBoardBar';

const SideBar = () => {
	const { store } = useContext(Ctx);

	return (
		<div className='sideBar'>
			{store.user.username &&
				localStorage.getItem('baseCode') ? (
					<DashBoardBar />
				) : (
					<LogBar />
				)}
		</div>
	);
};

export default SideBar;
