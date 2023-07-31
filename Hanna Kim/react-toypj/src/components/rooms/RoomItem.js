import React from "react";
import HostTier from "./HostTier";

const RoomItem = ({ item, navigate }) => {
  return (
    <div key={item.roomNumber} className="w-1280 p-3">
      <div className="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 lg:w-200 border shadow shadow-lg">
        <HostTier hostTier={item.hostTier} />
        <div
          className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
          style={{ width: "400px" }}
        >
          <div className="text-black font-bold text-xl mb-2 leading-tight text-left">
            {item.roomTitle}
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <p className="text-grey-darker text-base">{item.host}</p>
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
  );
};

export default RoomItem;
