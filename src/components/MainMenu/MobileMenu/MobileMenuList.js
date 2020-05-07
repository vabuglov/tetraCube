import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Ctx } from '../../../Store';

const MobileMenuList = props => {
	const { store } = useContext(Ctx);
	const menuFields = store.menuFields;
	let mobileListClass = 'mobileMenuList';
	if (props.activeMobileBurger) mobileListClass += ' mobileMenuList--active';
	const toogleMenu = () => {
		props.setActiveBurger(!props.activeMobileBurger);
	};
	return (
		<div className={mobileListClass}>
			<ul className='mobileMenuList-ul'>
				<li onClick={toogleMenu}>
					<Link
						className='mobileMenuList_link mobileMenuList_link--active'
						to='/'
					>
						{menuFields.home}
					</Link>
				</li>
				<li onClick={toogleMenu}>
					<Link
						className='mobileMenuList_link mobileMenuList_link--active'
						to='/order-new'
					>
						{menuFields.newOrder}
					</Link>
				</li>
				<li onClick={toogleMenu}>
					<Link
						className='mobileMenuList_link mobileMenuList_link--active'
						to='/order-list'
					>
						{menuFields.orderList}
					</Link>
				</li>
				<li>
					<Link className='mobileMenuList_link disabled' to='/#'>
						{menuFields.calendar}
					</Link>
				</li>
				<li>
					<Link className='mobileMenuList_link disabled' to='/#'>
						{menuFields.help}
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default MobileMenuList;
