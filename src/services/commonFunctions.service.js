export default class commonFunctions {
  getRandomKey = () => {
    return Math.random().toString(36).slice(3);
  }

  getApiUrl = () => {
    return "https://db.tetracube.com";
  }

  getComponentClass = (baseClass = "", className) => {
    if (className) {
      baseClass += " " + className;
    }
    return baseClass;
  }

  getAuthTokenName = () => {
    return "authToken";
  }
}