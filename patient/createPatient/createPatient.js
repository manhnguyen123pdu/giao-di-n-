let createPatient = async () =>{
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
        await axios.post("http://localhost:8080/api/patients", data);
        alert("Thêm bệnh nhân thành công ");
        window.location.href="../patitents/patients.html"
    } catch (error) {
        alert("Thêm bệnh nhân thất bại");
    }
} 