import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./routes/users";
import User from "./routes/user";
import NewUser from "./routes/newUser";
import WaitingRooms from "./routes/waitingRooms";
import WaitingRoom from "./routes/waitingRoom";
import NewWaitingRoom from "./routes/newWaitingRoom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="waitingRooms" element={<WaitingRooms />}>
            <Route path=":waitingRoomId" element={<WaitingRoom />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an user</p>
                </main>
              }
            />
            <Route path=":userId" element={<User />} />
          </Route>
          <Route path="newUser" element={<NewUser />} />
          <Route path="newWaitingRoom" element={<NewWaitingRoom />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Nada Aquí!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
