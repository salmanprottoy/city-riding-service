import React from "react";

const Signup = () => {
  return (
    <div>
      <div>
        <form action="">
          <h3 className="">Signup</h3>
          <div className="form-group">
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div class="form-group">
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div class="form-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Signup
          </button>
        </form>
      </div>
      <hr />
      <div>
        <button className="btn btn-success m-1">Login with Google</button>
        <br />
        <button className="btn btn-primary m-1">Login with Facebook</button>
      </div>
    </div>
  );
};

export default Signup;
