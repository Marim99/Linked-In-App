import { useState } from "react";
import { login } from "../features/userSlice";
import "../style/Login.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux/es/exports";
const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const register = () => {
    if (!name) {
      return alert("Please Enter Your Name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: photo,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: photo,
              }),
            );
          });
      })

      .catch((err) => alert(err.message));
  };
  const LoginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          }),
        );
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <img src="https://www.pngegg.com/ar/png-wpbdh" alt="" />
      <form action="">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={LoginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login-register" onClick={register}>
          Register Now
        </span>{" "}
      </p>
    </div>
  );
};

export default Login;
