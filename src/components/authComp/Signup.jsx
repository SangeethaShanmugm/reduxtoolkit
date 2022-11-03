import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Styles from "./auth.module.css";
import { register, reset } from "../../redux/AuthSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "../../pages/Spinner";
import Sidebar from "../sidebarComp/Sidebar";
const Signup = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { isLoading, isSuccess, isError, message } = useSelector(
    state => state.auth
  );
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [number, setNumber] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("");
  let [idNum, setIdNum] = useState("");

  useEffect(() => {
    if (isError) {
      toast.error(message, { position: "top-right" });
    }
    if (isSuccess) {
      toast.success("successfully registered", { position: "top-right" });
      navigate("/login");
    }
    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  let handleSubmit = e => {
    e.preventDefault();
    try {
      let payload = { email, password, username, number, idNum };
      dispatch(register(payload));
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <Sidebar >
    <section className={Styles.authBlock}>
      <article>
        <header>
          <h1>Signup for other Roles</h1>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                id="username"
                required
                placeholder="enter username"
                onChange={e => setUsername(e.target.value)}
              />
            </div>
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
              <label htmlFor="email">Number</label>
              <input
                type="number" 
                name="number"
                value={number}
                id="number"
                required
                placeholder="enter number"
                onChange={e => setNumber(e.target.value)}
              />
            </div>
            {/* <div className="form-group">
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
            </div> */}
            <div className="form-group">
              <label htmlFor="email">Role</label>
              <input
                type="role" 
                name="role"
                value={role}
                id="role"
                required
                placeholder="enter role"
                onChange={e => setRole(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="idNum">ID</label>
              <input
                type="idNum" 
                name="idNum"
                value={idNum}
                id="idNum"
                required
                placeholder="enter idNum"
                onChange={e => setIdNum(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button>Register</button>
            </div>
          </form>
        </main>
      </article>
    </section>
   </Sidebar>
    </>
  );
};

export default Signup;
