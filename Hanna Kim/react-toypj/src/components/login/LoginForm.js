import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginFormInput from "./LoginFormInput";
import LoginFormButton from "./LoginFormButton";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch("/data/user.json");
      const jsonData = await response.json();
      setUser(jsonData);
    }
    fetchUserData();
  }, []);

  const onChangeId = (e) => {
    e.preventDefault();
    setId(e.target.value);
  };

  const onChangePwd = (e) => {
    e.preventDefault();
    setPwd(e.target.value);
  };

  const clickLogin = () => {
    if (user.id === id && user.password === pwd) {
      navigate("/rooms");
    } else {
      alert("다시 입력하세요");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <LoginFormInput
              label="Email address"
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={id}
              onChange={onChangeId}
            />

            <LoginFormInput
              label="Password"
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              value={pwd}
              onChange={onChangePwd}
            />

            <LoginFormButton onClick={clickLogin} label="Sign in" />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
