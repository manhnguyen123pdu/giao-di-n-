let fetchRooms = async () =>{
    let res = await axios.get("http://localhost:8080/api/rooms");
    renderRooms(res.data);
}

let renderRooms = (data) =>{
    let roomsHTML = "";
    for(let i = 0; i<data.length; i++){
        roomsHTML+=`
                  <tr>
                        <td>${i+1}</td>
                        <td>${data[i].roomNumber}</td>
                        <td>${data[i].roomType}</td>
                        <td>${data[i].departmentName}</td>

                        <td>
                            <span class="status available">
                           ${data[i].status}
                            </span>
                        </td>

                        <td>
                            <div class="action-buttons">

                                <button class="btn-view">
                                    <i class="fa-regular fa-eye"></i>
                                </button>

                                <button class="btn-edit">
                                    <i class="fa-solid fa-pen"></i>
                                </button>

                                <button class="btn-delete">
                                    <i class="fa-regular fa-trash-can"></i>
                                </button>

                            </div>
                        </td>
                    </tr>
        `
    }
    document.querySelector(".rooms-all").innerHTML = roomsHTML;
}
fetchRooms();