import React, { useContext } from 'react';
import { Ctx } from '../../Store';
import DesktopMenu from './DesktopMenu/DesktopMenu';
import MobileMenu from './MobileMenu/MobileMenu';

const MainMenu = props => {
	const { store } = useContext(Ctx);

	return (
		<>
			{store.user.username &&
			localStorage.getItem('baseCode') ? (
				<nav className='mainMenu'>
					<DesktopMenu />
					<MobileMenu
						activeBurger={props.activeBurger}
						setActiveBurger={props.setActiveBurger}
					/>
				</nav>
			) : (
				<></>
			)}
		</>
	);
};

export default MainMenu;
