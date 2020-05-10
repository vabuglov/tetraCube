import React, { useState, useContext, useEffect } from 'react';
import { Ctx } from './Store';
import SideBar from "./components/SideBar/SideBar";
import MainMenu from "./components/MainMenu/MainMenu";
import { Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import LogInImage from './pages/HomePage/LogInImage/LogInImage';
import authenticationService from './services/authentication.service';
import commonFunctions from './services/commonFunctions.service';
import routes from './routes';


function App() {
  const { store, setUser } = useContext(Ctx);
  const [activeMobileBurger, setActiveMobileBurger] = useState(false);
  const commonFuncs = new commonFunctions();


  useEffect(() => {
    if (
      Object.keys(store.user).length === 0 &&
      localStorage.getItem("baseCode")
    ) {
      const apiUrl = commonFuncs.getApiUrl();
      const auth = new authenticationService({ apiUrl });
      auth.getUserData(localStorage.getItem("baseCode")).then(el => {
        if (el.status) {
          setUser(el.data.user);
        } else auth.logout();
      });
    }
  });

  if (!localStorage.getItem("baseCode") || !store.user.username)
    return (
      <div className="App containerApp">
        <SideBar />
        <LogInImage />
      </div>
    );

  const allRoles = commonFuncs.getRoles();
  const role = store.user.role;

  console.log({ ...routes["admin"] });

  const renderRoutes = (role) => {
    return routes[role].map(props => <Route {...props}>{props.component}</Route>)
  }


  return (
    <div className="App containerApp">
      <SideBar />
      <MainMenu
        activeBurger={activeMobileBurger}
        setActiveBurger={setActiveMobileBurger}
      ></MainMenu>
      <div className="containerRoutes">
        <Switch>
          {role.indexOf(allRoles.admin) > -1 && renderRoutes(allRoles.admin)}
          {role.indexOf(allRoles.user) > -1 && renderRoutes(allRoles.user)}
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
