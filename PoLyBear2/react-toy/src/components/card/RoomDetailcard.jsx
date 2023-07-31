import React from 'react';
import getTierColor from '../../utils/getTierColor';

const RoomDetailcard = ({ roomTitle, host, hostTier }) => {
  return (
    <>
      <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 '>
        <div
          className={`flex flex-col items-center pb-10 ${getTierColor(
            hostTier
          )}`}>
          <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
            {roomTitle}
          </h5>
          <h6 className='mb-1 text-l font-medium text-gray-900 dark:text-white'>
            {host}
          </h6>
          <span className='text-sm text-gray-500 dark:text-gray-400'>
            {hostTier}
          </span>
        </div>
      </div>
    </>
  );
};

export default RoomDetailcard;
