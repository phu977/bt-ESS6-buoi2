const URL = "https://64c62b56c853c26efadb28af.mockapi.io/food";
import {
  renderFoodList,
  laythongtin,
  onSuccess,
  onFail,
  showDataForm,
} from "./controllers.js";
let FetchFoodList = () => {
  axios({
    url: URL,
    method: "GET",
  })
    .then((res) => {
      console.log("🚀 ~ file: main-v2.js:9 ~ .then ~ res:", res);
      renderFoodList(res.data);
    })
    .catch((err) => {
      console.log("🚀 ~ file: main-v2.js:13 ~ err:", err);
    });
};
FetchFoodList();

window.addFood = () => {
  let food = laythongtin();
  console.log("🚀 ~ file: main-v2.js:20 ~ food:", food);
  axios({
    url: URL,
    method: "POST",
    data: food,
  })
    .then((res) => {
      console.log("🚀 ~ file: main-v2.js:27 ~ .then ~ res:", res);
      $("#exampleModal").modal("hide");
      onSuccess("Thêm thành công");
      FetchFoodList();
    })
    .catch((err) => {
      onFail("không thêm thức đơn được");
      console.log("🚀 ~ file: main-v2.js:31 ~ err:", err);
    });
};

window.deleteFood = (id) => {
  console.log("🚀 ~ file: main-v2.js:39 ~ window.deleteFood ~ id:", id);
  axios({
    url: `${URL}/${id}`,
    method: "DELETE",
  })
    .then((res) => {
      console.log("🚀 ~ file: main-v2.js:43 ~ .then ~ res:", res);
      onSuccess("Xóa thành công");
      FetchFoodList();
    })
    .catch((err) => {
      onFail("không xóa món ăn được");
      console.log("🚀 ~ file: main-v2.js:48 ~ window.deleteFood ~ err:", err);
    });
};
window.editFood = (id) => {
  $("#exampleModal").modal("show");
  axios({
    url: `${URL}/${id}`,
    method: "GET",
  })
    .then((res) => {
      console.log("🚀 ~ file: main-v2.js:65 ~ .then ~ res:", res);
      showDataForm(res.data);
    })
    .catch((err) => {
      console.log("🚀 ~ file: main-v2.js:69 ~ err:", err);
    });
};

window.updateFood = () => {
  $("#exampleModal").modal("hide");
  let food = laythongtin();
  axios({
    url: `${URL}/${food.ma}`,
    method: "PUT",
    data: food,
  })
    .then((res) => {
      console.log("🚀 ~ file: main-v2.js:84 ~ .then ~ res:", res);
      onSuccess("Chỉnh sửa thành công");
      FetchFoodList()
    })
    .catch((err) => {
      onFail("Chỉnh sửa thất bại");
      console.log("🚀 ~ file: main-v2.js:88 ~ err:", err);
      
    });
};
