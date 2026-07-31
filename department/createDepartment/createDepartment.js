let createDepartment = async () => {
    let departmentName = document.querySelector(".departmentName").value;
    let phone = document.querySelector(".phone").value;
    let description = document.querySelector(".description").value;

    if(departmentName == "" || phone=="" ||description ==""){
        alert("Chưa đầy đủ thông tin");
        return;
    }
    let data = {
        departmentName,
        phone,
        description
    }
    try {
        await axios.post("http://localhost:8080/api/departments", data);
         window.location.href = '/Departments/index.html' 
    } catch {
        alert("thêm thất bại")
        console.log("thêm thất bại")
    }
}