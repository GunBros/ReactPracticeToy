import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Joker } from "../../assets/images/tier/Joker.svg";
import { ReactComponent as A } from "../../assets/images/tier/A.svg";
import { ReactComponent as J } from "../../assets/images/tier/J.svg";
import { ReactComponent as Q } from "../../assets/images/tier/Q.svg";
import { ReactComponent as K } from "../../assets/images/tier/K.svg";

const getHostSvg = (hostTier) => {
  const hostIconMap = {
    king: K,
    jack: J,
    ace: A,
    queen: Q,
    joker: Joker,
  };

  const HostIcon = hostIconMap[hostTier];
  if (!HostIcon) return null;

  return (
    <HostIcon
      className="block h-auto w-full lg:w-48 flex-none bg-cover"
      style={{ width: "108px" }}
    />
  );
};

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
    <>
      <div className="h-screen  flex items-center justify-center">
        <div className="container m-auto flex flex-wrap flex-col md:flex-row items-center justify-center">
          {rooms
            ? rooms.map((item) => (
                <div key={item.roomNumber} className="w-1280 p-3">
                  <div className="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 lg:w-200 border shadow shadow-lg">
                    {getHostSvg(item.hostTier)}
                    <div
                      className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
                      style={{ width: "400px" }}
                    >
                      <div className="text-black font-bold text-xl mb-2 leading-tight text-left">
                        {item.roomTitle}
                      </div>
                      <hr />
                      <div className="flex justify-between items-center">
                        <p className="text-grey-darker text-base">
                          {item.host}
                        </p>
                        <button
                          className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-1 px-8"
                          onClick={() => navigate(`/rooms/${item.roomNumber}`)}
                        >
                          입장
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default Rooms;
