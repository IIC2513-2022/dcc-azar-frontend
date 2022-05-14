import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const location = useLocation();
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
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {users.map((user) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/users/${user.id}`}
            key={user.id}
          >
            {user.username}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
