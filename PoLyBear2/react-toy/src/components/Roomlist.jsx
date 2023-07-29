import React, {useEffect, useState} from 'react';
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
                setRooms(jsonData.rooms);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const roomCards = rooms.map((room) => <Roomcard key={room.roomNumber} room={room}/>)

    return (
        <>
            {roomCards}
        </>
    );
};

export default Roomlist;