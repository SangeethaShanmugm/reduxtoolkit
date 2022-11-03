import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../../pages/Spinner";
import { signIn, reset } from "../../redux/AuthSlice";
import Styles from "./auth.module.css";
const Signin = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { isLoading, isSuccess, isError, message, user } = useSelector(
    state => state.auth
  );

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  useEffect(() => {
    if (isError) {
      toast.error(message, { position: "top-right" });
    }
    if (isSuccess && user) {
      toast.success("successfully Signed in", { position: "top-right" });
      navigate("/");
    }
    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch, user]);

  let handleSubmit = e => {
    e.preventDefault();
    try {
      let payload = { email, password };
      dispatch(signIn(payload));
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <section className={Styles.authBlock}>
      <article>
        <header>
          <h1>SignIn</h1>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                id="email"
                required
                placeholder="enter email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                id="password"
                required
                placeholder="enter password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button>Sign In</button>
            </div>
          </form>
        </main>
      </article>
    </section>
  );
};

export default Signin;
