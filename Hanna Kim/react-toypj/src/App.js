import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/login/loginForm";
import Rooms from "./components/rooms/room";
import RoomDetail from "./components/rooms/roomDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:roomNumber" element={<RoomDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
