import React, { useState, useEffect } from 'react';
import Roomcard from './card/Roomcard';

const Roomlist = () => {
  const [rooms, setRooms] = useState([]);

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
        setRooms(jsonData);
        console.log(rooms);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Roomcard></Roomcard>
    </>
  );
};

export default Roomlist;
