export default class commonFunctions {
  getRandomKey = () => {
    return Math.random().toString(36).slice(3);
  }

  parseSepareteDate = (date = new Date(), symbol = '.', mode = 'DateDMY') => {
    const selfDate = new Date(date);
    let dateBits = {
      year: selfDate.getFullYear(),
      month: selfDate.getMonth() + 1,
      day: selfDate.getDate(),
      hours: selfDate.getHours(),
      minutes: selfDate.getMinutes()
    }

    Object.keys(dateBits).forEach(key => {
      if (dateBits[key] < 10)
        dateBits[key] = "0" + dateBits[key];
    });

    switch (mode) {
      case 'DateDMY':
        return dateBits.day + symbol + dateBits.month + symbol + dateBits.year;
      case 'DateDM':
        return dateBits.day + symbol + dateBits.month;
      case 'DateYMD':
        return dateBits.year + symbol + dateBits.month + symbol + dateBits.day;
      case 'DateDMYHM':
        return dateBits.day + symbol + dateBits.month + symbol + dateBits.year + " " + dateBits.hours + ":" + dateBits.minutes;
      case 'DateYMDHM':
        return dateBits.year + symbol + dateBits.month + symbol + dateBits.day + " " + dateBits.hours + ":" + dateBits.minutes;
      case 'DateHM':
        return dateBits.hours + ":" + dateBits.minutes;
      default:
        return dateBits.day + symbol + dateBits.month + symbol + dateBits.year;
    }
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

  getRoles = () => {
    return {
      admin: "admin"
    }
  }

  wrapPhoneByMask = (value) => {
    if (value === "+")
      return "";
    if (value.toString().length > 17)
      return value.slice(0, 17);
    let str = '';
    const re = /([0-9]{1})/
    const num = /[0-9]/g;
    if (value) str = value.match(num);
    if (value === "+") str = '';
    if (str) {
      str = str.join('');
      str = str.replace(re, '$1');
      return str;
    }
    return str;
  }
}