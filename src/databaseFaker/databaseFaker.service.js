export default class databaseFakerService {
  pushRequest = (url, body = null) => {
    switch (url) {
      case "https://db.tetracube.com/rapi/auth":
        return {
          data: {
            user: {
              active: "1",
              comment: "",
              username: "marina",
              deleted: false,
              email: "nastena1985@gmail.ru",
              first_name: "Анастасия",
              id: "56",
              last_name: "Джигуашвилевна",
              phone: "8 800 235 55 35",
              role: ["admin", "user"]
            }
          },
          status: true
        }
      case "https://db.tetracube.com/rapi/freddyCrygerName":
        return {
          data: {
            freddy_name: "Мистер БИН!!!"
          },
          status: true
        }
      case "https://db.tetracube.com/rapi/user/name/update":
        return {
          data: {
            user: {
              active: "1",
              comment: "",
              username: "marina",
              deleted: false,
              email: "nastena1985@gmail.ru",
              first_name: body,
              id: "56",
              last_name: "Джигуашвилевна",
              phone: "8 800 235 55 35",
              role: ["admin", "user"]
            }
          },
          status: true
        }
      case "https://db.tetracube.com/rapi/user/phone/update":
        return {
          data: {
            user: {
              active: "1",
              comment: "",
              username: "marina",
              deleted: false,
              email: "nastena1985@gmail.ru",
              first_name: "Анастасия",
              id: "56",
              last_name: "Джигуашвилевна",
              phone: body,
              role: ["admin", "user"]
            }
          },
          status: true
        }
      default:
        return {
          status: false,
          error: "unexpected request"
        }
    }
  }

  getRandomTimerTime = () => {
    return Math.round(Math.random() * 4000);
  }

  fetchData = async (url, init) => {
    const accept = init.headers.get("Accept");
    const contentType = init.headers.get("Content-Type");
    const authToken = init.headers.get("Authorization");
    const trueAccept = "application/vnd.tetracube.v1+json";
    const trueContentType = "application/vnd.tetracube.v1+json";
    const tureAuthToken = "Basic YWRtaW46YWRtaW4=";
    const timeAnswer = this.getRandomTimerTime();



    if (accept !== trueAccept)
      return { status: false, error: "bad accept" }

    if (contentType !== trueContentType)
      return { status: false, error: "bad contentType" }

    if (authToken !== tureAuthToken)
      return { status: false, error: "Unauthorized" };

    const promise = new Promise((resolve, reject) => {
      let wait = setTimeout(() => {
        resolve(this.pushRequest(url, init.body));
        clearTimeout(wait)
      }, timeAnswer)
    })
    return promise;
  }
} 