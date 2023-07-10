import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import user2 from "../media/pics/user (2).png";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        let data = await response.json();
        console.log("Login successful" + data.accessToken);
        window.localStorage.setItem("token", data.accessToken);
        alert("Bentornato/a, " + formData.userName + '!');
        navigate("/home");
      } else {
        console.log("Login failed");
        alert("Username or password wrong!");
      }
    } catch (error) {
      console.log("An error occurred while logging in");
      alert(error);
    }
  };

  return (
    <div className="login-wrapper">
      <form action="" className="form" onSubmit={handleSubmit}>
        <img src={user2} alt="user" />
        <h2>Login</h2>
        <div className="input-group">
          <input type="text" name="userName" id="loginUser" required
                value={formData.userName}
                onChange={handleChange}/>
          <label htmlFor="loginUser">User Name</label>
        </div>
        <div className="input-group">
          <input
            type="password"
            className="input"
            name="password"
            value={formData.password}
            onChange={handleChange}
            id="loginPassword"
            required
          />
          <label htmlFor="loginPassword">Password</label>
        </div>
        <input type="submit" value="Login" className="submit-btn bottone" />
        <a href="#forgot-pw" className="forgot-pw">
          Forgot Password?
        </a>
      </form>

      <div id="forgot-pw">
        <form action="" className="form">
          <a href="#" className="close">
            &times;
          </a>
          <h2>Reset Password</h2>
          <div className="input-group">
            <input type="email" name="email" id="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <input type="submit" value="Submit" className="submit-btn bottone" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
