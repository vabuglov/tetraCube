import React from 'react'
import InfoPage from '../InfoPage/InfoPage';

const NotFound = () => {
  const content = (
    <div className="notFound">
      Данной страницы не существует =/
    </div >
  );
  return (
    <InfoPage content={content} />
  )
}

export default NotFound
