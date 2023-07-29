import React from 'react';
import useTierColor from "../../hooks/useTierColor";

const Roomcard = ({room}) => {
    const tierColor = useTierColor(room.hostTier);

    return (
        <>
            <div
                className={`w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${tierColor}`}>
                <div className='flex justify-end px-4 pt-4'>
                    <button
                        id='dropdownButton'
                        className='inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5'
                        type='button'></button>
                </div>
                <div className='flex flex-col items-center pb-10'>
                    <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
                        {room.roomTitle}
                    </h5>
                    <h6 className='mb-1 text-l font-medium text-gray-900 dark:text-white'>
                        {room.host}
                    </h6>
                    <span className='text-sm text-gray-500 dark:text-gray-400'>{room.hostTier}</span>
                    <div className='flex mt-4 space-x-3 md:mt-6'>
                        <a
                            href='#'
                            className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                            입장
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Roomcard;