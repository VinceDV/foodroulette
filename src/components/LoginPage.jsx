import React from 'react';
import user2 from '../media/pics/user (2).png';
const LoginPage = () => {
  return (
    <div className="login-wrapper">
      <form action="" className="form">
        <img src={user2} alt="user" />
        <h2>Login</h2>
        <div className="input-group">
          <input type="text" name="loginUser" id="loginUser" required />
          <label htmlFor="loginUser">User Name</label>
        </div>
        <div className="input-group">
          <input type="password" name="loginPassword" id="loginPassword" required />
          <label htmlFor="loginPassword">Password</label>
        </div>
        <input type="submit" value="Login" className="submit-btn" />
        <a href="#forgot-pw" className="forgot-pw">Forgot Password?</a>
      </form>

      <div id="forgot-pw">
        <form action="" className="form">
          <a href="#" className="close">&times;</a>
          <h2>Reset Password</h2>
          <div className="input-group">
            <input type="email" name="email" id="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <input type="submit" value="Submit" className="submit-btn" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
