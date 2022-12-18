import React, { useState, useEffect } from "react";
import "./Register.css";
import { Link,  useNavigate } from "react-router-dom";
import AmazonLogo from "../../Amazon_Logo.png";
import { useSelector, useDispatch } from "react-redux";
import { auth, createUserWithEmailAndPassword } from "../../utils/firebase";
import { login, logout } from "../../redux/basketSlice";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(state => state.user);

  const navigate = useNavigate();
  let dispatch = useDispatch();
  
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  

  const register = (e) => {
    e.preventDefault();
    // dispatch(registerInitiate(email, password));
    createUserWithEmailAndPassword(auth,email, password)
      .then(({ user }) => {
        dispatch(login(user));
      })
      .catch(error => {
        console.log(error);
        dispatch(logout())
      });
    setEmail('');
    setPassword('');
  };
  return (
    <div className="register">
      <Link to="/">
        <img src={AmazonLogo} className="register-logo" alt="logo" />
      </Link>
      <div className="register-container">
        <h1>Create Account</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={register} className="continue">
            Continue
          </button>
          <div className="detail">
            <p>Already have an account ?</p>
            <Link to="/login" className="signin-link">
              <p>Sign In</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
