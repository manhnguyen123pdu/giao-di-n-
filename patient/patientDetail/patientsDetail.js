const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


let fetchPatientDetail = async () => {

    let res = await axios.get(`http://localhost:8080/api/patients/${id}`);

    renderPatientInfo(res.data);
}


let renderPatientInfo = (data) => {

    // Thông tin bệnh nhân
    document.querySelector(".patientID").innerHTML = data.id;

    document.querySelector(".fullName").innerHTML = data.fullName;

    document.querySelector(".dateOfBirth").innerHTML = data.dateOfBirth;

    document.querySelector(".gender").innerHTML = data.gender;

    document.querySelector(".phone").innerHTML = data.phoneNumber;

    document.querySelector(".email").innerHTML = data.email;

    document.querySelector(".address").innerHTML = data.address;

    document.querySelector(".createdAt").innerHTML = data.createdAt;


    // Số lượng lịch khám
    document.querySelector(".appointmentNumber").innerHTML =
        data.appointments.length;

    // Danh sách lịch khám
    let appointmentHTML = "";


    for (let i = 0; i < data.appointments.length; i++) {

        appointmentHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>
                    ${data.appointments[i].appointmentDate}
                </td>
                <td>
                    ${data.appointments[i].appointmentTime}
                </td>
                <td>
                    ${data.appointments[i].doctor}
                </td>
                <td>
                    ${data.appointments[i].room}
                </td>
                <td>
                    ${data.appointments[i].reason}
                </td>
                <td>
                    ${data.appointments[i].diagnosis || "-"}
                </td>
                <td>
                    ${data.appointments[i].status}
                </td>
            </tr>
        `;
    }



    document.querySelector(".appointments").innerHTML =
        appointmentHTML;
}


// Gọi hàm
fetchPatientDetail();