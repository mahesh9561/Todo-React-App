import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, selectLoading, selectUser } from "../../store/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const user = useSelector(selectUser);

  const handleClick = () => {
    dispatch(loginUser(email, pass));
    alert("Successfull Login")
  };

  return (
    <div>
      {/* {loading && <p>Loading...</p>} */}
      <div>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Please Enter your Email ID:"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Please enter your pass"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={handleClick}>Login</button>
      </div>
      {/* {error && <p>{error}</p>} */}
    </div>
  );
}

export default Login;
