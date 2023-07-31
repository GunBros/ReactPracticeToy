import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RoomItem from "./RoomItem";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  const roomList = async () => {
    const response = await fetch("/data/rooms.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const roomlist = await response.json();
    setRooms(roomlist.rooms);
  };

  useEffect(() => {
    roomList();
  }, []);

  return (
      <div className="h-screen  flex items-center justify-center">
        <div className="container m-auto flex flex-wrap flex-col md:flex-row items-center justify-center">
          {rooms
            ? rooms.map((item) => (
                <RoomItem
                  key={item.roomNumber}
                  item={item}
                  navigate={navigate}
                />
              ))
            : null}
        </div>
      </div>
  );
};

export default Rooms;
