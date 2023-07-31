import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/user.json', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
        const jsonData = await response.json();
        setUserData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const handleLogin = () => {
    if (inputId === userData.id && inputPw === userData.password) {
      alert('로그인 성공');
      navigate('/rooms');
    } else {
      alert('로그인 실패');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div>
      <div class='relative mb-6' data-te-input-wrapper-init>
        <input
          type='text'
          className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
          id='exampleFormControlInput2'
          placeholder='Email address'
          value={inputId}
          onChange={handleInputId}
          onKeyPress={handleKeyPress}
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
          className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
          id='exampleFormControlInput22'
          placeholder='Password'
          value={inputPw}
          onChange={handleInputPw}
          onKeyPress={handleKeyPress}
        />
        {inputPw === '' && (
          <label
            htmlFor='exampleFormControlInput22'
            className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out  dark:text-neutral-200 dark:peer-focus:text-primary'>
            Password
          </label>
        )}
      </div>
      <div className='text-center lg:text-left'>
        <button
          type='button'
          className='inline-block rounded bg-transparent px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-gray-800 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-200 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-200 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-gray-300 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
          onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
