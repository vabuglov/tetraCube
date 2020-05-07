import React, { useContext } from 'react'
import { Ctx } from '../../Store';
import UserPage from '../UserPage/UserPage';
import LogInImage from './LogInImage/LogInImage';

const HomePage = () => {
  const { store } = useContext(Ctx);
  if (!store.user.username) return <LogInImage />;
  return <UserPage />;
}

export default HomePage
