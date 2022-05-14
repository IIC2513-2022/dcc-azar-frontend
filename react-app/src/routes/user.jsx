import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

async function deleteUser(userId) {
  const config = {
    method: "delete",
    url: `${process.env.REACT_APP_API_URL}/users/${userId}`,
    headers: {},
  };

  return await axios(config)
    .then(function () {
      return true;
    })
    .catch(function () {
      return false;
    });
}

export default function User() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  const config = {
    method: "get",
    url: `${process.env.REACT_APP_API_URL}/users/${parseInt(
      params.userId,
      10
    )}`,
    headers: {},
  };
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [params.userId]);

  return (
    <main style={{ padding: "1rem" }}>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>Username: {user.username}</p>
      <p>Age: {user.age}</p>
      <p>
        <button
          onClick={async () => {
            if (await deleteUser(user.id)) {
              navigate("/users", { state: { deleted: user.id } });
            }
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
