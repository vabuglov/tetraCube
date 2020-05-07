
export default class rAPService {
  constructor(props) {
    this.__apiUrl = props.url;
    this.headers = new Headers();
    this.headers.append("Accept", "application/vnd.csweboffice.v1+json");
    this.headers.append("Content-Type", "application/vnd.csweboffice.v1+json");
    if (props.base64) this.headers.append("Authorization", props.base64);
    else this.headers.append("Authorization", localStorage.getItem("baseCode"));
  }

  checkBaseCode = answer => {
    if (answer.error === "Unauthorized") localStorage.removeItem("baseCode");
  };

  getResource = async url => {
    let answer = "";
    const init = {
      method: "GET",
      headers: this.headers
    };

    await fetch(this.__apiUrl + url, init)
      .then(response => {
        return response.json();
      })
      .then(text => {
        answer = text;

      })
      .catch(e => {
        console.log(e);
        answer = e;
      });

    // console.log(answer);
    this.checkBaseCode(answer);
    return answer;
  };

  addResource = async (url, data, type) => {
    let answer = "";
    // console.log(data);
    // console.log(type);

    const init = {
      method: type,
      body: JSON.stringify(data),
      headers: this.headers
    };
    await fetch(this.__apiUrl + url, init)
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

  deleteResource = () => {

  }

  getOrderList = async (page, limit, filter) => {
    let params = '';
    let comma = '';
    let status = [];
    // console.log(filter);

    if (filter.filterWait)
      status = [...status, 0]
    if (filter.filterConfirmed)
      status = [...status, 1]
    if (filter.filterInWork)
      status = [...status, 2]
    if (filter.filterPaid)
      status = [...status, 4]
    params = `params={
      "condition": {`;
    if (status && status.length) {
      comma = `,`;
      params += `
      "status": [${status}]`;
    }
    if (filter.orderNumber) {
      params += `${comma}
      "manualnumber": "${filter.orderNumber}"`
      comma = `,`;
    }
    if (filter.filterLoss) {
      params += `${comma}
      "losts": ${filter.filterLoss}`
      comma = `,`;
    }
    if (filter.orderDeliveryDate) {
      params += `${comma}
      "delivery_time": "${filter.orderDeliveryDate}"`
      comma = `,`;
    }
    if (filter.orderCity) {
      params += `${comma}
      "city": ${filter.orderCity.id}`;
      comma = `,`;
    }
    params += `
    }
  }`;

    const pagination = `pagination={"page":${page},"limit":${limit}}`;
    const request = params + "&" + pagination;

    if (!page) {
      console.log("rAPService.getOrderList: Вы не указали страницу!");
    }
    if (!limit) {
      console.log("rAPService.getOrderList: Вы не указали лимит!");
    }
    const data = await this.getResource(
      `/rapi/orders/list?${request}`
    );


    return data.data.orderList;
  };

  getGuidesAndMenegers = async (id) => {
    const data = await this.getResource(
      `/rapi/staff/list/?params={"condition":{"client_id":${id}}}&pagination={"page":0,"limit":10000}`
    ).then(el => el.data.staffList.rows).then(el => {
      return el.map(el => {
        el.value = el.name.slice(0, 20);
        if (el.name.length > 20) el.value += "...";
        if (el.guide) el.label = el.name + " " + el.phone_num;
        else el.label = el.name + " " + el.email;
        return el;
      });
    });
    const answer = {
      guides: data.filter(el => el.guide),
      menegers: data.filter(el => !el.guide)
    }
    return answer;
  }

  getOrderDocument = async (id) => {
    const data = await this.getResource(`/rapi/orders/get/${id}`);
    return data;
  }

  getAllCitiesList = async () => {
    const data = await this.getResource(`/rapi/cities/list`);
    return data;
  }

  addStaff = async (data, type) => {
    let answer = null;
    if (type)
      answer = await this.addResource(`/rapi/staff/update`, data, "put");
    else
      answer = await this.addResource(`/rapi/staff/add`, data, "post");
    return answer.json();
  }

  deleteStaff = async (id) => {
    await this.addResource(`/rapi/staff/delete/${id}`, ``, `delete`);
  }

  addOrder = async (data, type) => {
    let answer;
    if (type === `put`)
      answer = await this.addResource(`/rapi/orders/update`, data, `put`);
    else
      answer = await this.addResource(`/rapi/orders/add`, data, "post");
    return answer;
  }

}
