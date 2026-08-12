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

let updateDoctor =(id) =>{
     window.location.href = `/doctor/updateDoctor/updateDoctor.html?id=${id} `;
}
let renderDoctors = (data) => {
    let doctorsHTML = "";
    for (let i = 0; i < data.length; i++) {
        let statusClass = data[i].status.toLowerCase() =="active" ? "active" : "inactive"
        doctorsHTML += `
                     <tr>
                         <td>${i + 1}</td>
                         <td>${data[i].doctorName}</td>
                         <td>${data[i].specialization}</td>
                         <td>${data[i].departmentName}</td>
                         <td>${data[i].phoneNumber}</td>
                         <td>${data[i].email}</td>
                         <td><span class="status ${statusClass}"> ${data[i].status}</span>
                         </td>
                         <td>
                          <a href="../doctorDetail/doctorDetail.html?id=${data[i].doctorId}"><button class="view"><i class="fa-regular fa-eye"></i></button></a>
                             <button  onClick ="updateDoctor(${data[i].doctorId})" class="edit"><i class="fa-solid fa-pen"></i></button>
                             <button onClick ="deleteDoctor(${data[i].doctorId})" class="delete"><i class="fa-regular fa-trash-can"></i></button>
                         </td>
                     </tr>
        `
    }
    document.querySelector(".all-doctors").innerHTML = doctorsHTML;
}
fetchDoctors()