import {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const RoomDetail = () => {
  const [room, setRoom] = useState([]);
  const roomNumber = useParams().roomNumber;
  const navigate = useNavigate();

  const roomDetail = async () => {
    const response = await fetch("/data/rooms.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const roomlist = await response.json();
    const getRoom = roomlist.rooms.filter(
      (room) => room.roomNumber === Number(roomNumber)
    );
    if (getRoom.length > 0) {
      setRoom(getRoom[0]);
    } else {
      alert("방이 없습니다!");
      navigate("/rooms");
    }
  };

  useEffect(() => {
    roomDetail();
  }, []);

  return (
    <div className="container h-screen flex justify-center items-center py-5">
      <div className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
          {room.roomTitle}
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {room.host}
          </h5>
        </div>
        <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
          {room.hostTier}
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;