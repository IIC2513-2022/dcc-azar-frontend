import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

async function createUser(firstName, lastName, username, age, password) {
  const data = JSON.stringify({
    firstName: firstName,
    lastName: lastName,
    username: username,
    age: age,
    password: password,
  });

  const config = {
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/users`,
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
      return [false, error.response.data];
    });
}

export default function NewUser() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  return (
    <main style={{ padding: "1rem" }}>
      <label>
        First Name:
        <input
          type="text"
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      <label>
        Username:
        <input
          type="text"
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Age:
        <input type="text" onChange={(event) => setAge(event.target.value)} />
      </label>
      <label>
        Password:
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      {errors.map((error) => (
        <h3>{error}</h3>
      ))}
      <p>
        <button
          onClick={async () => {
            const user = await createUser(
              firstName,
              lastName,
              username,
              age,
              password
            );
            if (user[0]) {
              navigate(`/users/${user[1]}`);
            } else {
              setErrors(user[1]);
            }
          }}
        >
          Create
        </button>
      </p>
    </main>
  );
}
