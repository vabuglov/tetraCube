import React, { useState, useContext } from 'react'
import Input from '../../components/Input/Input';
import commonFunctions from '../../services/commonFunctions.service';
import PagesContainer from '../PagesContainer/PagesContainer';
import ButtonText from '../../components/buttons/ButtonText/ButtonText';
import { Ctx } from '../../Store';
import rAPService from '../../services/requestsApi.service';
import Loader from 'react-spinners/RingLoader';

const UserPage = () => {
  const commonFuncs = new commonFunctions();
  const url = commonFuncs.getApiUrl();
  const request = new rAPService({ url });
  const [phone, setPhone] = useState();
  const [name, setName] = useState();
  const [loadData, setLoadData] = useState();
  const [pageInit, setPageInit] = useState(false)
  const { store } = useContext(Ctx);

  const changePhone = (value) => {
    setPhone(commonFuncs.wrapPhoneByMask(value));
  }

  const buttonPushName = () => {
    const answer = request.addUserData(name, "put", "name");
    answer.then(el => {
      if (el.status) {
        alert("Данные обновлены!")
      }
    });
  }

  const buttonPushPhone = () => {
    const answer = request.addUserData(phone, "put", "phone");
    answer.then(el => {
      if (el.status) {
        alert("Данные обновлены!")
      }
    });
  }

  if (!loadData) {
    const requestData = request.getFreddyCrygerName();
    requestData.then(el => setLoadData(el.data.freddy_name));
    return (
      <PagesContainer title="Управление пользователем" >
        <Loader size={200} color={"blue"} loading={true} />
      </PagesContainer>
    );
  }

  if (!pageInit) {
    changePhone(store.user.phone);
    setName(store.user.first_name);
    setPageInit(true);
  }

  return (
    <PagesContainer title="Управление пользователем" >
      <section className="userPage">
        <div className="userPage_line">
          <Input value={name} onChange={setName} className="userPage_line-input" label="Имя" variant="outlined" />
          <ButtonText onClick={buttonPushName} variant="contained" color="primary" disableElevation > Изменить </ButtonText>
        </div>
        <div className="userPage_line">
          <Input value={phone} onChange={changePhone} className="userPage_line-input" label="Телефон" variant="outlined" />
          <ButtonText onClick={buttonPushPhone} variant="contained" color="primary" disableElevation > Изменить </ButtonText>
        </div>
        <span>Имя Фредди: {loadData}. Это была загрузка из базы данных с ожиданием</span>
      </section>
    </PagesContainer>
  )
}

export default UserPage
