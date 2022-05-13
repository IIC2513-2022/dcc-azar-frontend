import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

async function createWaitingRoom(name, status, creatorId) {
  const data = JSON.stringify({
    name: name,
    creatorId: creatorId,
    status: status,
  });

  const config = {
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/waitingRooms`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return await axios(config)
    .then(function (response) {
      return [true, response.data.id];
    })
    .catch(function (error) {
      console.log(error);
      return [false, ["Algo salió mal"]];
    });
}

export default function NewUser() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [creatorId, setCreatorId] = useState(0);
  const [errors, setErrors] = useState([]);
  const config = {
    method: "get",
    url: `${process.env.REACT_APP_API_URL}/users`,
    headers: {},
  };
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [location.state]);

  return (
    <main style={{ padding: "1rem" }}>
      <label>
        Name:
        <input type="text" onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Status:
        <input
          type="text"
          onChange={(event) => setStatus(event.target.value)}
        />
      </label>
      <label>
        Creator:
        <select onChange={(event) => setCreatorId(event.target.value)}>
          {users.map((user) => (
            <option value={user.id}>{user.username}</option>
          ))}
        </select>
      </label>
      {errors.map((error) => (
        <h3>{error}</h3>
      ))}
      <p>
        <button
          onClick={async () => {
            const waitingRoom = await createWaitingRoom(
              name,
              status,
              creatorId
            );
            if (waitingRoom[0]) {
              navigate(`/waitingRooms/${waitingRoom[1]}`);
            } else {
              setErrors(waitingRoom[1]);
            }
          }}
        >
          Create
        </button>
      </p>
    </main>
  );
}
