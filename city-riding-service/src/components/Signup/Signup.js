import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  let name = "";
  let email = "";
  let pass = "";
  let cPass = "";
  let errorMsg = "";

  const handleBlur = (e) => {
    console.log(e.target.name, e.target.value);
    if (e.target.name === "name") {
      name = e.target.value;
    }
    if (e.target.name === "email") {
      email = e.target.value;
    }
    if (e.target.name === "password") {
      pass = e.target.value;
    }
    if (e.target.name === "confirmPassword") {
      cPass = e.target.value;
    }
  };
  if (pass !== cPass) {
    errorMsg = "password doesn't matched!";
  }
  const handleSubmit = () => {};
  return (
    <div>
      <div className="container" style={{ width: "30rem" }}>
        <form
          className="border border-info p-3 m-5 rounded"
          onSubmit={() => handleSubmit()}
        >
          <h3 className="text-center text-info">Signup</h3>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              style={{ width: "18rem" }}
              required
              onBlur={handleBlur}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              style={{ width: "18rem" }}
              required
              onBlur={handleBlur}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              style={{ width: "18rem" }}
              required
              onBlur={handleBlur}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              style={{ width: "18rem" }}
              required
              onBlur={handleBlur}
            />
            <small>{errorMsg}</small>
          </div>
          <button type="submit" class="btn btn-info" style={{ width: "18rem" }}>
            Signup
          </button>
          <small>
            Already have an account? <Link to="/login"> click here </Link>{" "}
          </small>
        </form>
      </div>
    </div>
  );
};

export default Signup;
