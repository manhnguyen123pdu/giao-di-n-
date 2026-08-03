  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  let fetchDoctorDetail = async () =>{
    let res = await axios.get(`http://localhost:8080/api/doctors/${id}`)
    renderDoctorInfo(res.data)
  }
  let renderDoctorInfo = (data) =>{
    document.querySelector(".doctorID").innerHTML="BS"+  data.doctorId;
    document.querySelector(".fullName").innerHTML= data.fullName;
    document.querySelector(".specialization").innerHTML= data.specialization;
    document.querySelector(".phoneNumber").innerHTML= data.phoneNumber;
    document.querySelector(".email").innerHTML= data.email;
    document.querySelector(".departmentName").innerHTML= data.departmentName;
    document.querySelector(".status").innerHTML= data.status;
    document.querySelector(".appoitmentNumber").innerHTML = data.appointments.length
    let appointmentHTML =""
    for(let i =0; i<data.appointments.length; i++){
        appointmentHTML +=`
            <tr>
                <td>${i+1}</td>
                <td>${data.appointments[i].appointmentDate}</td>
                <td>${data.appointments[i].appointmentTime}</td>
                <td>${data.appointments[i].room}</td>
                <td>${data.appointments[i].patient}</td>
                <td>${data.appointments[i].status}</td>
                
            </tr>
        `
    }
    console.log(appointmentHTML)
        document.querySelector(".appoitments").innerHTML =appointmentHTML;

  }
//   gọi hàm
fetchDoctorDetail()