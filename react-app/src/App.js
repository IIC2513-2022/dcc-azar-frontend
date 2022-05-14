import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>DCC AZAR!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/users">Users</Link> |{" "}
        <Link to="/waitingRooms">Waiting Rooms</Link>|{" "}
        <Link to="/newUser">New User</Link> |{" "}
        <Link to="/newWaitingRoom">New Waiting Room</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
