//  call dữ liệu 
let fetchDoctors = async () => {
    try {
        let res = await axios.get("http://localhost:8080/api/doctors")
        renderDoctors(res.data)
    } catch {
        console.log("Lỗi")
    }
}
let deleteDoctor = async (id) => {
    try {
        let res = await axios.delete(`http://localhost:8080/api/doctors/${id}`)
        alert("xóa thành công")
        fetchDoctors();
    } catch {
        console.log("Lỗi")
    }
}
let renderDoctors = (data) => {
    let doctorsHTML = "";
    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        doctorsHTML += `
                     <tr>
                         <td>${i + 1}</td>
                         <td>${data[i].doctorName}</td>
                         <td>${data[i].specialization}</td>
                         <td>${data[i].departmentName}</td>
                         <td>${data[i].phoneNumber}</td>
                         <td>${data[i].email}</td>
                         <td><span class="status active"> ${data[i].status}</span>
                         </td>
                         <td>
                             <button class="view"><i class="fa-regular fa-eye"></i></button>
                             <button class="edit"><i class="fa-solid fa-pen"></i></button>
                             <button onClick ="deleteDoctor(${data[i].doctorId})" class="delete"><i class="fa-regular fa-trash-can"></i></button>
                         </td>
                     </tr>
        `
    }
    document.querySelector(".all-doctors").innerHTML = doctorsHTML;
}
fetchDoctors()