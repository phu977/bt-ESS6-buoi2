const MON_CHAY = true;
const CON_MON = true;
export let renderFoodList = (list) => {
  let contentHtml = "";
  list.forEach(
    ({ ma, ten, loai, gia, khuyenMai, tinhTrang, moTa, hinhAnh }) => {
      contentHtml += `
        <tr >
            <th>${ma}</th>
            <th>${ten}</th>
            <th>${
              loai == MON_CHAY
                ? "<span class='text-success'>Chay</span>"
                : "<span class='text-text-danger'>mặn</span>"
            }</th>
            <th>${gia}</th>
            <th>${khuyenMai}</th>
            <td>0</td>
            <td>${tinhTrang == CON_MON ? "còn" : "hết món"}</td>
            <td>
                <button class='btn-danger btn' onclick="deleteFood(${ma})">xóa</button>
                <button class='btn-primary btn'onclick = "editFood(${ma})">sửa</button>
            </td>
        </tr>
        `;
    }
  );
  document.querySelector("#tbodyFood").innerHTML = contentHtml;
};

export let laythongtin = () => {
  // lấy thông tin từ form
  let ma = document.getElementById("foodID").value;
  let ten = document.getElementById("tenMon").value;
  let loai = document.getElementById("loai").value;
  let gia = document.getElementById("giaMon").value;
  let khuyenMai = document.getElementById("khuyenMai").value;
  let tinhTrang = document.getElementById("tinhTrang").value;
  let hinhMon = document.getElementById("hinhMon").value;
  let moTa = document.getElementById("moTa").value;
  return {
    ma,
    ten,
    loai,
    gia,
    khuyenMai,
    tinhTrang,
    hinhMon,
    moTa,
  };
};
export let onSuccess = (message) => {
  Swal.fire(message, "", "success");
};
export let onFail = (message) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
    footer: '<a href="">Why do I have this issue?</a>',
  });
};
export let showDataForm = (data) => {
  let { ma, ten, loai, gia, khuyenMai, tinhTrang, moTa, hinhAnh } = data;
  document.getElementById("foodID").value = ma;
  document.getElementById("tenMon").value = ten;
  document.getElementById("loai").value = loai;
  document.getElementById("giaMon").value = gia;
  document.getElementById("khuyenMai").value = khuyenMai;
  document.getElementById("tinhTrang").value = tinhTrang;
  document.getElementById("hinhMon").value = hinhAnh;
  document.getElementById("moTa").value = moTa;
};
