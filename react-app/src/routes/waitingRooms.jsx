import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import axios from "axios";

export default function WaitingRooms() {
  const [waitingRooms, setwaitingRooms] = useState([]);
  const location = useLocation();
  const config = {
    method: "get",
    url: `${process.env.REACT_APP_API_URL}/waitingRooms`,
    headers: {},
  };
  
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setwaitingRooms(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {waitingRooms.map((waitingRoom) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/waitingRooms/${waitingRoom.id}`}
            key={waitingRoom.id}
          >
            {waitingRoom.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
