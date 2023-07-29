import {useEffect, useState} from "react";

const useTierColor = (tier) => {


    const [tierColorClass, setTierColorClass] = useState('');

    useEffect(() => {
        let colorClass;
        switch (tier) {
            case 'queen':
                colorClass = 'bg-pink-500';
                break;
            case 'king':
                colorClass = 'bg-purple-500';
                break;
            case 'jack':
                colorClass = 'bg-blue-500';
                break;
            case 'joker':
                colorClass = 'bg-red-500';
                break;
            case 'ace':
                colorClass = 'bg-green-500';
                break;
            default:
                colorClass = 'bg-gray-500';
        }
        setTierColorClass(colorClass);
    }, [tier]);

    return tierColorClass;
};

export default useTierColor;