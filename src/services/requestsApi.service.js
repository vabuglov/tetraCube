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
    console.log(answer);
    this.checkBaseCode(answer);
    return answer;
  };

  getOrderList = async (request) => {
    const data = await this.getResource(
      `/rapi/orders/list?${request}`
    );

    return data.data.orderList;
  };

}
