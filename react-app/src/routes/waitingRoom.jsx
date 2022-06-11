import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function WaitingRoom() {
  const [waitingRoom, setwaitingRoom] = useState({});
  const params = useParams();
  const config = {
    method: "get",
    url: `${process.env.REACT_APP_API_URL}/waitingRooms/${parseInt(
      params.waitingRoomId,
      10
    )}`,
    headers: {},
  };
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setwaitingRoom(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.waitingRoomId]);

  return (
    <main style={{ padding: "1rem" }}>
      {"waitingRoom" in waitingRoom ? (
        <div>
          <h2>{waitingRoom.waitingRoom.name}</h2>
          <p>Estado: {waitingRoom.waitingRoom.status}</p>
          <p>Creador: {waitingRoom.creator.username}</p>
        </div>
      ) : (
        <p>Nada aquí!</p>
      )}
    </main>
  );
}
