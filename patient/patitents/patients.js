let fetchPatients = async ()=>{
    try {
        let res = await axios.get("http://localhost:8080/api/patients");
        renderPatients(res.data)
    } catch (error) {
        console.log(error)
    }
}
deletePatient = async(id) =>{
    try {
       await axios.delete(`http://localhost:8080/api/patients/${id}`);
       alert("Xóa bệnh nhân thành công")
       fetchPatients()
    } catch (error) {
        alert("Xóa thất bại")
    }
}
let renderPatients = (p) =>{

    patientsHTML = "";
    for(let i =0; i<p.length; i++){
        patientsHTML +=`
                                <tr>
                            <td>${i+1}</td>
                            <td class="name">
                                ${p[i].fullName}
                            </td>
                            <td>${p[i].dateOfBirth}</td>
                            <td>${p[i].gender}</td>
                            <td>${p[i].phoneNumber}</td>
                            <td>${p[i].email}</td>
                            <td>
                                ${p[i].address}
                            </td>
                            <td>
                               ${p[i].createdAt}
                            </td>
                            <td>
                                <div class="actions">
                                <a href="../patientDetail/patientsDetail.html?id=${p[i].id}">
                                <button  class="view">
                                        <i class="fa-regular fa-eye"></i>
                                    </button>
                                   

                                <a href="../UpdatePatient/UpdatePatient.html?id=${p[i].id}">
                                    <button class="edit">
                                        <i class="fa-solid fa-pencil"></i>
                                    </button>
                                </a> 
                                    <button onclick="deletePatient(${p[i].id})" class="delete">
                                        <i class="fa-regular fa-trash-can"></i>
                                    </button>

                                </div>
                            </td>
                        </tr>
        `
    }
    document.querySelector(".all-patients").innerHTML=patientsHTML;
}

fetchPatients()