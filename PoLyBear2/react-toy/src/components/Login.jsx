import React, { useState, useEffect } from 'react';

const Login = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const [userData, serUserData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../data/user.json');
        const jsonData = await response.json();
        set;
      } catch (error) {}
    };
  });

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  return (
    <div>
      <div class='relative mb-6' data-te-input-wrapper-init>
        <input
          type='text'
          class='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
          id='exampleFormControlInput2'
          placeholder='Email address'
          value={inputId}
          onChange={handleInputId}
        />
        {inputId === '' && (
          <label
            htmlFor='exampleFormControlInput2'
            className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out dark:text-neutral-200 dark:peer-focus:text-primary'>
            Email address
          </label>
        )}
      </div>
      <div class='relative mb-6' data-te-input-wrapper-init>
        <input
          type='password'
          class='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
          id='exampleFormControlInput22'
          placeholder='Password'
          value={inputPw}
          onChange={handleInputPw}
        />
        {inputPw === '' && (
          <label
            for='exampleFormControlInput22'
            class='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary'>
            Password
          </label>
        )}
      </div>
      <div class='text-center lg:text-left'>
        <button
          type='button'
          class='inline-block rounded bg-transparent px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-gray-800 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-200 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-200 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-gray-300 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
          data-te-ripple-init
          data-te-ripple-color='light'>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
