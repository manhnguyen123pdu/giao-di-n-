  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

//    lấy dữ liệu ứng id 
let fetchDepartmentByID = async ()=>{
    let res = await axios.get(`http://localhost:8080/api/departments/${id}`)
    renderInfo(res.data)
    console.log(res.data)
}
let updateDepartment = () =>{
    window.location.href = `/updateDepartment/updateDepartment.html?id=${id}`
}
let deleteDepartment = async() =>{
    await axios.delete(`http://localhost:8080/api/departments/${id}`);
    window.location.href = '/Departments/index.html' 
}
let renderInfo=(data)=>{
    document.querySelector(".departmentName").innerHTML=data.departmentName
    document.querySelector(".departmentId").innerHTML=data.departmentId;
    document.querySelector(".departmentName2").innerHTML=data.departmentName
    document.querySelector(".phone").innerHTML=data.phone
    document.querySelector(".description-text").innerHTML=data.description
    document.querySelector(".number-doctor").innerHTML=data.doctors.length
    let doctorsHtml =""
    for(let i =0; i<data.doctors.length; i++){
        doctorsHtml+= `
                   <tr>
                       <td>${i+1}</td>
                       <td>${data.doctors[i].fullName}</td>
                       <td>${data.doctors[i].specialization}</td>
                       <td>${data.doctors[i].phone}</td>
                       <td>${data.doctors[i].status}</td>
                       <td><span class="badge active">${data.doctors[i].fullName}</span></td>
                   </tr>
                `
    }
    document.querySelector(".doctors-list").innerHTML=doctorsHtml
}
// gọi hàm
fetchDepartmentByID()

//  formik / yub 