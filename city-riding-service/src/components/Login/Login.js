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
      <div>
        <form action="">
          <h3 className="">Login</h3>
          <div className="form-group">
            <input type="text" placeholder="Email" />
          </div>
          <div class="form-group">
            <input type="password" placeholder="Password" />
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="checkLogin" />
            <label class="form-check-label" for="checkLogin">
              Remember me
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </form>
      </div>
      <hr />
      <div>
        <button className="btn btn-success m-1" onClick={handleGoogleSignIn}>
          <FontAwesomeIcon icon={faGoogle} /> Connect with Google
        </button>
        <br />
        <button className="btn btn-primary m-1" onClick={handleFacebookSignIn}>
          <FontAwesomeIcon icon={faFacebook} /> Connect with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
