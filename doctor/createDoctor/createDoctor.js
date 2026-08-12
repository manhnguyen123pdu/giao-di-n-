
let renderDepartment = async () => {
    let optionDepartment = `
       <option value=""> -- Chọn khoa -- </option>
    `
    let res = await axios.get("http://localhost:8080/api/departments");

    for (let i = 0; i < res.data.length; i++) {
        optionDepartment += `
         <option value="${res.data[i].departmentId}">${res.data[i].departmentName}</option>
        `
    }
    console.log(res.data)
    document.querySelector(".option").innerHTML = optionDepartment;

}

let createDoctor = async () => {
    let fullName = document.querySelector(".fullName").value;
    let specialization = document.querySelector(".specialization").value;
    let phone = document.querySelector(".phone").value;
    let email = document.querySelector(".email").value;
    let status = document.querySelector('input[name="status"]:checked').value;
    let departmentId = document.querySelector(".departmentId").value;
    let data = {
        departmentId,
        fullName,
        specialization,
        phone,
        email,
        status
    }
    try {
        alert("thêm bác sĩ thành công ")
        await axios.post("http://localhost:8080/api/doctors", data);
        window.location.href = '../doctor/doctor.html'
    } catch (error) {
        alert("thêm tất bại")

    }

}

// gọi hàm 
renderDepartment()