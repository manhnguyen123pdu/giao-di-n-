// khai báo hàm
let fetchDepartments = async () => {
    let res = await axios.get("http://localhost:8080/api/departments");
    renderDepartment(res.data);
}

let deleteDepartment = async (id) => {
    await axios.delete(`http://localhost:8080/api/departments/${id}`);
    fetchDepartments();
}
let renderDepartment = (departments) => {
    let contentHTML = ""
    for (let i = 0; i < departments.length; i++) {
        contentHTML += `
           <tr>
                <td>${i + 1}</td>
                <td class="blue">${departments[i].departmentName}</td>
                <td>${departments[i].description}</td>
                <td>${departments[i].phone}</td>
                <td>${departments[i].numberOfDoctors}</td>
                <td>
                    <a href="../DepartmentDetail/detail.html?id=${departments[i].departmentId}"><button class="view"><i class="fa-regular fa-eye"></i></button></a>
                    <a href="../updateDepartment/updateDepartment.html?id=${departments[i].departmentId}"> <button class="edit"><i class="fa-solid fa-pen"></i></button></a>
                    <button onclick="deleteDepartment(${departments[i].departmentId})" class="delete"><i class="fa-regular fa-trash-can"></i></button>
                </td>
             </tr>
        `
    }
    document.querySelector(".department-list").innerHTML = contentHTML
}


// Gọi hàm
fetchDepartments();