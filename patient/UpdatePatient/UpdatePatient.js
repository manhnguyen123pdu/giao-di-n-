const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
let fetchPatientDetail = async () => {
    let res = await axios.get(`http://localhost:8080/api/patients/${id}`);
    console.log(res.data)

    document.querySelector(".fullName").value = res.data.fullName;
    document.querySelector(".dateOfBirth").value = res.data.dateOfBirth;
    document.querySelector(".phoneNumber").value = res.data.phoneNumber;
    document.querySelector(".email").value = res.data.email;
    document.querySelector(".address").value = res.data.address;
    document.querySelector(".gender").value = res.data.gender;
}


let updatePatient = async () => {
    let fullName = document.querySelector(".fullName").value;
    let dateOfBirth = document.querySelector(".dateOfBirth").value;
    let phoneNumber = document.querySelector(".phoneNumber").value;
    let email = document.querySelector(".email").value;
    let address = document.querySelector(".address").value;
    let gender = document.querySelector(".gender").value;

    let data = {
        fullName,
        dateOfBirth,
        phoneNumber,
        email,
        address,
        gender
    }
    try {
        await axios.put(`http://localhost:8080/api/patients/${id}`, data);
        alert("Sửa bệnh nhân thành công ");
        window.location.href = "../patitents/patients.html"
    } catch (error) {
        alert("Sửa bệnh nhân thất bại");
    }
}

fetchPatientDetail();
