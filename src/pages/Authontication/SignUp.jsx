import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import logo from "./images/pngimg.com - amazon_PNG1.png";
import classes from "./SignUp.module.css";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Utility/Firebase";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Type } from "../../Utility/action";
import { ClipLoader } from "react-spinners";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);

  const [Loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });
  const navigate = useNavigate(); //this is useful to nafigate to another page when successfully signedin or signedUp
    const navStateData= useLocation()
    console.log(navStateData)

  console.log(user);

  const AuthHandler = async (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log(e.target.name);
    if (e.target.name == "Sign-in") {
      setLoading({ ...Loading, signIn: true });
      //firebase authentication
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo)
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...Loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...Loading, signIn: false });
        });
    } else {
      setLoading({ ...Loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo)
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...Loading, signUp: false });
          navigate( navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...Loading, signUp: false });
        });
    }
  };

  return (
    <section>
      {/* logo */}
      <div className="w-28 m-auto pt-4 pb-2">
        <Link to="/">
          <img src={logo} alt="Amazon Logo" />
        </Link>
      </div>

      {/* form */}
      <div className={classes.form_container}>
        <h1 className="font-bold">Sign-in</h1>
        {
          navStateData?.state?.msg && (
            <small 
             style={{
                padding:'5px',
                textAlign:'center',
                color:'red',
                fontWeight:'bold',
              }}
              >
                {navStateData?.state?.msg}
            
            </small>
          )
        }
        <form>
          <div>
            <label htmlFor="email" className="font-bold">
              E-mail or mobile phone number
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <button
            type="submit"
            className={classes.button}
            onClick={AuthHandler}
            name="Sign-in"
          >
            {Loading.signIn ? (
              <ClipLoader color="#000" size={15} />
            ) : (
              " Continue"
            )}
          </button>
        </form>
        {/* agreement */}
        <p className="text-sm mt-4">
          By continuing, you agree to{" "}
          <Link className="text-blue-400">Amazon's Conditions of Use </Link> and{" "}
          <Link className="text-blue-400">Privacy Notice.</Link>
        </p>
        <p className="mt-2">
          <Link className="text-blue-400">Need help?</Link>
        </p>
        {/* sign-Up */}
        <hr className="mt-4" />
        <div className="mt-4">
          <h3 className="text-xs font-bold">Buying for Work?</h3>
          <Link className="text-blue-400 text-sm">Shop on Amazon Business</Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center m-auto pt-4">
        <p className="text-center text-xs font-light">New to Amazon?</p>
        <button
          type="submit"
          className={classes.buttonSignUp}
          onClick={AuthHandler}
          name="Sign-Up"
        >
          {Loading.signUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            " Create your Amazon account"
          )}
        </button>
        {error && <small className="text-red-400 pt-6">{error}</small>}
      </div>
    </section>
  );
};

export default SignUp;
