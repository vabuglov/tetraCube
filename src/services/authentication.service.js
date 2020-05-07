import rAPService from "./requestsApi.service";

export default class authenticationService {
  constructor(props) {
    this.__apiUrl = props.url;
  }

  login = async (userName, password) => {
    const base64Code = "Basic " + window.btoa(userName + ":" + password);
    const dbService = new rAPService({
      url: this.__apiUrl,
      base64: base64Code
    });

    let answer = dbService.getResource("/rapi/auth");

    await answer.then(el => {
      if (el.status) {
        if (el.data.redirect)
          window.location.replace(el.data.redirect);
        localStorage.setItem("baseCode", base64Code);
      }
    });
    return answer;
  };

  getUserData = async base64Code => {
    const dbService = new rAPService({
      url: this.__apiUrl,
      base64: base64Code
    });

    let answer = dbService.getResource("/rapi/auth");
    await answer.then(el => {
      if (el.status) {
        if (el.data.redirect)
          window.location.replace(el.data.redirect);
        localStorage.setItem("baseCode", base64Code);
      }
    });

    return answer;
  };

  logout = () => {
    localStorage.removeItem("baseCode");
  };
}
