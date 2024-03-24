import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/authSlice";
import { loginUser, selectLoading, selectUser } from "../../store/authSlice";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const handleClick = () => {
    dispatch(registerUser(name, email, pass));
    alert("Successfull register")
  };

  return (
    <div>
      {/* {loading && <p>Loading...</p>} */}
      <div>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Please Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button onClick={handleClick}>Create Account</button>
      </div>
      {/* {error && <p>{error}</p>} */}
    </div>
  );
}

export default Register;
