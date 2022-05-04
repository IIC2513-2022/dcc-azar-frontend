window.onload = () => {
  var fname = document.getElementById("fname");
  getUsers();
  var newButton = document.getElementById("newWaitingRoom");
  newButton.addEventListener('click', sendNewWaitingRoom);
}
async function getUsers() {
  const response = await fetch("http://localhost:3000/users");
  const users = await response.json();
  var select = document.getElementById("users");
  for (var i = 0; i < users.length; i++) {
    var option = document.createElement("option");
    option.text = `${users[i].firstName} ${users[i].lastName}`;
    option.value = users[i].id;
    select.add(option);
  }
  return select;
}
async function sendNewWaitingRoom() {
  var creator = document.getElementById("users");
  datos = {
    name: fname.value,
    creatorId: creator.value,
    status: "waiting",
  }

  const response = await fetch("http://localhost:3000/waitingRooms/", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(datos)
  }).then(res => {
      if (res.status == 201) {
        fname.value = "";
        creator.value = "";
      }
      return res.json()
  })
  return response
}




