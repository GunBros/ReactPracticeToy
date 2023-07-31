import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RoomDetailcard from './card/RoomDetailcard';

const RoomDetails = () => {
  const { roomNumber } = useParams();
  const [roomData, setRoomData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/rooms.json', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
        const jsonData = await response.json();
        const room = jsonData.rooms.find(
          (room) => room.roomNumber === parseInt(roomNumber.slice(1))
        );
        setRoomData(room);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [roomNumber]);

  return (
    <>
      {roomData !== null && (
        <RoomDetailcard
          roomTitle={roomData.roomTitle}
          host={roomData.host}
          hostTier={roomData.hostTier}
        />
      )}
    </>
  );
};

export default RoomDetails;
