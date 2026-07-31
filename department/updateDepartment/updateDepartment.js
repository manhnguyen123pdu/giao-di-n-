const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
let fetchDepartmentByID = async () => {
    let res = await axios.get(`http://localhost:8080/api/departments/${id}`)
    console.log(res.data)

    document.querySelector(".departmentName").value= res.data.departmentName;
    document.querySelector(".phone").value= res.data.phone;
    document.querySelector(".description").value= res.data.description;
}

fetchDepartmentByID(id)
let createDepartment = async () => {
    //    lấy dữ liệu ứng id 

    fetchDepartmentByID()
    let departmentName = document.querySelector(".departmentName").value;
    let phone = document.querySelector(".phone").value;
    let description = document.querySelector(".description").value;

    if (departmentName == "" || phone == "" || description == "") {
        alert("Chưa đầy đủ thông tin");
        return;
    }
    let data = {
        departmentName,
        phone,
        description
    }

    try {
        await axios.put(`http://localhost:8080/api/departments/${id}`, data);
        window.location.href = '/Departments/index.html'
    } catch {
        alert("thêm thất bại")
        console.log("thêm thất bại")
    }
}