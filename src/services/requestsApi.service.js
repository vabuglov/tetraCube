import databaseFakerService from "../databaseFaker/databaseFaker.service";

export default class rAPService {
  constructor(props) {
    this.__apiUrl = props.url;
    this.dbFaker = new databaseFakerService();
    this.headers = new Headers();
    this.headers.append("Accept", "application/vnd.tetracube.v1+json");
    this.headers.append("Content-Type", "application/vnd.tetracube.v1+json");
    if (props.base64) this.headers.append("Authorization", props.base64);
    else this.headers.append("Authorization", localStorage.getItem("baseCode"));
  }

  checkBaseCode = answer => {
    if (answer.error === "Unauthorized") {
      localStorage.removeItem("baseCode");
    }
  };

  getResource = async url => {
    let answer = null;
    const init = {
      method: "GET",
      headers: this.headers
    };
    await this.dbFaker.fetchData(this.__apiUrl + url, init)
      .then(text => {
        answer = text;
      })
      .catch(e => {
        answer = e;
        console.log(e);
      });
    this.checkBaseCode(answer);
    return answer;
  };

  addResource = async (url, data, type) => {
    let answer = "";
    console.log(data);
    // console.log(type);

    const init = {
      method: type,
      body: JSON.stringify(data),
      headers: this.headers
    };
    await this.dbFaker.fetchData(this.__apiUrl + url, init)
      .then(text => {
        answer = text;
      })
      .catch(e => {
        answer = e;
        console.log(e);
      });;
    this.checkBaseCode(answer);
    // console.log(answer);
    // answer.json().then(el => console.log(el));
    return answer;
  };

  getFreddyCrygerName = async () => {
    const data = await this.getResource(`/rapi/freddyCrygerName`);
    return data;
  }

  addUserData = async (data, typeRequest, typeData) => {
    let answer = null;
    const put = "put";
    const post = "post";
    if (typeRequest === put)
      answer = await this.addResource(`/rapi/user/${typeData}/update`, data, put);
    else if (typeRequest === post)
      answer = await this.addResource(`/rapi/user/${typeData}/add`, data, post);
    return answer;
  }

}
