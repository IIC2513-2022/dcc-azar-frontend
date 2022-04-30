window.onload = code => {
  var fname = document.getElementById("fname");
  var creator = getUsers();
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
        lname.value = "";
        username.value = "";
        age.value = "";
        password.value = "";
      }
      return res.json()
  })
  return response
}




