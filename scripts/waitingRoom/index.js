window.onload = async () => {
  getWaitingRooms();
}

async function getWaitingRooms() {
  const response = await fetch("http://localhost:3000/waitingRooms/")
  const waitingRooms = await response.json()
  var index = document.getElementById("index")
  for (var i = 0; i < waitingRooms.length; i++) {
    var div = document.createElement("div");
    var a = document.createElement("a");
    a.href = `show.html?id=${waitingRooms[i].id}`;
    a.innerText = waitingRooms[i].name;
    div.appendChild(a);
    index.appendChild(div);
  }
}

