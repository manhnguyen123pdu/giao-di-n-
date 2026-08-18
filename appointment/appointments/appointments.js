
let fetchAppointment = async () => {
    try {
        let res = await axios.get("http://localhost:8080/api/appointments");
        renderAppointment(res.data);
    } catch (error) {
        console.log(error);
    }

}

let renderAppointment = (data) => {
    let appointmentsHTML = "";
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].status)
        let statusCss = ""
        if (data[i].status == "Scheduled") {
            statusCss = "scheduled"
        } else if (data[i].status == "Completed") {
            statusCss = "completed"
        }else{
            statusCss ="cancelled"
        }
        appointmentsHTML += `
                 <tr>
                 
                        <td>${i + 1}</td>
                        <td>LK${data[i].id}</td>
                        <td>${data[i].patientName}</td>
                        <td>${data[i].doctor}</td>
                        <td>
                           P${data[i].room}
                        </td>
                        <td>${data[i].appointmentDate}</td>
                        <td>${data[i].appointmentTime}</td>
                        <td>${data[i].reason}</td>
                        <td>
                            <span class="status ${statusCss}">
                              ${data[i].status}
                            </span>
                        </td>
                        <td>
                            <div class="actions">
                            <a href="../appointmentDetail/appointmentDetail.html?id=${data[i].id}"><button class="view">◉</button></a>
                                <button class="edit">✎</button>
                                <button class="delete">♜</button>
                            </div>
                        </td>
                    </tr>
        `
    }
    document.querySelector(".appointment-all").innerHTML = appointmentsHTML

}
fetchAppointment();