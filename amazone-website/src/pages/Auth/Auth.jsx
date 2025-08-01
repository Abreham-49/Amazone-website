import React, { useState } from "react";
import classes from "./auth.module.css";
import { Link } from "react-router-dom";
import {auth} from "../../Utility/firebase"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useContext } from "react";
import { Datacontext } from "../../components/DataProvider/DataProvider";
import { Type } from "../../Utility/Action.type";
function Auth() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error, setError] = useState("");

const [{ user }, dispatch] = useContext(Datacontext);
 console.log(user)
  const authhandler=async(e)=>{
    e.preventDefault();
    console.log(e.target.name)
    if(e.target.name=="signin"){
      signInWithEmailAndPassword(auth,email,password).then((userInfo)=>{
       dispatch({
        type:Type.SET_USER,
        user:userInfo.user
       })
      }).catch((err)=>{
        console.log(err)
      })
    }else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  
  return (
    <section className={classes.login}>
      <Link to="/">
        <img
          src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
          alt=""
        />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign-in</h1>
        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            name="signin"
            onClick={authhandler}
            className={classes.login_signin}
          >
            Sign in
          </button>
        </form>
        {/* aggrement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
        name="signup"
          type="submit"
          onClick={authhandler}
          className={classes.login_register}
        >
          Create your Amazone Account
        </button>
      </div>
    </section>
  );
}

export default Auth;
