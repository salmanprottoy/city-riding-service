import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const [loggerInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  const handleFacebookSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const sinnedInUser = { name: displayName, email };
        setLoggedInUser(sinnedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      });
  };
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const sinnedInUser = { name: displayName, email };
        setLoggedInUser(sinnedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      });
  };
  return (
    <div className="login">
      <div className="container" style={{ width: "30rem" }}>
        <form action="" className="border border-dark p-3 m-5 rounded">
          <h3 className="text-center">Login</h3>
          <div className="form-group">
            <input type="text" placeholder="Email" style={{ width: "18rem" }} />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              style={{ width: "18rem" }}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="checkLogin"
            />
            <label className="form-check-label" for="checkLogin">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary m-2"
            style={{ width: "18rem" }}
          >
            Login
          </button>
        </form>
      </div>
      <hr />
      <div className="container p-3">
        <button
          className="btn btn-success m-2 text-left"
          style={{ width: "18rem" }}
          onClick={handleGoogleSignIn}
        >
          <FontAwesomeIcon className="mr-5" icon={faGoogle} /> Connect with
          Google
        </button>
        <br />
        <button
          className="btn btn-primary m-2 text-left"
          style={{ width: "18rem" }}
          onClick={handleFacebookSignIn}
        >
          <FontAwesomeIcon className="mr-5" icon={faFacebook} /> Connect with
          Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
