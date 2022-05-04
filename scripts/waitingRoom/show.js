window.onload = async () => {
  getWaitingRoom();
}

async function getWaitingRoom() {
  const params = new URLSearchParams(window.location.search)
  const id = params.get("id")
  const response = await fetch(`http://localhost:3000/waitingRooms/${id}`)
  const res = await response.json()
  var waitingRoom = document.getElementById("waitingRoom")
  var h3 = document.createElement("h3");
  h3.innerText = res.waitingRoom.name;
  waitingRoom.appendChild(h3);
  var creator = document.getElementById("creator");
  var h3 = document.createElement("h3");
  h3.innerText = `${res.creator.firstName} ${res.creator.lastName}`;
  creator.appendChild(h3);
}


