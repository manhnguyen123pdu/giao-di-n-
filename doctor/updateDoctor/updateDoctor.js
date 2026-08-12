
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let fetchDoctorDetail = async () => {
    let res = await axios.get(`http://localhost:8080/api/doctors/${id}`)
    document.querySelector(".fullName").value = res.data.fullName;
    document.querySelector(".specialization").value = res.data.specialization;
    document.querySelector(".phone").value = res.data.phoneNumber;
    document.querySelector(".email").value = res.data.email;
    let demo = document.querySelector(`.op${res.data.departmentId}`).selected = true; 
}

let renderDepartment = async () => {
    let optionDepartment = `
       <option value=""> -- Chọn khoa -- </option>
    `
    let res = await axios.get("http://localhost:8080/api/departments");

    for (let i = 0; i < res.data.length; i++) {
        optionDepartment += `
         <option class ="op${res.data[i].departmentId}" value="${res.data[i].departmentId}">${res.data[i].departmentName}</option>
        `
    }
    document.querySelector(".option").innerHTML = optionDepartment;
    fetchDoctorDetail()
}

let updateDoctor = async () => {
    let fullName = document.querySelector(".fullName").value;
    let specialization = document.querySelector(".specialization").value;
    let phone = document.querySelector(".phone").value;
    let email = document.querySelector(".email").value;
    let status = document.querySelector('input[name="status"]:checked').value;
    let departmentId = document.querySelector(".departmentId").value;
    let data = {
        departmentId: Number(departmentId),
        fullName,
        specialization,
        phone,
        email,
        status
    }
    try {
        alert("sửa bác sĩ thành công ")
        await axios.put(`http://localhost:8080/api/doctors/${id}`, data);
        window.location.href = '../doctor/doctor.html'

    } catch (error) {
        alert("thêm tất bại")

    }

}
// gọi hàm 
renderDepartment();
