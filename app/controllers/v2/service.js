const BASE_URL = "https://64c62b56c853c26efadb28af.mockapi.io/food";
let getList = () => {
  return axios({
    url: BASE_URL,
    method: "GET",
  });
};
let deleteFood = (id) => {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  });
};
let addFood = (food) => {
  return axios({
    url: BASE_URL,
    method: "POST",
    data: food,
  });
};

let getDetails = (id) => {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  });
};

let getUpdateFood = (food) => {
  return axios({
    url: `${BASE_URL}/${food.ma}`,
    method: "PUT",
    data: food,
  });
};
let foodServ = {
  getList,
  deleteFood,
  addFood,
  getDetails,
  getUpdateFood,
};

export default foodServ;
