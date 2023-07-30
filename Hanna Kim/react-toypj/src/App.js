import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/login/LoginForm";
import Rooms from "./components/rooms/Rooms";
import RoomDetail from "./components/rooms/RoomDetail";

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
