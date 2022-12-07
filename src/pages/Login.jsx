import Google from "../img/google.png";
import Facebook from "../img/facebook.png";
import Github from "../img/github.png";

const Login = () => {

  const google = () =>{
    window.open("https://social-login-backend.onrender.com/auth/google", "_self")
  }

  const github = () =>{
    window.open("https://social-login-backend.onrender.com/auth/github", "_self")
  }


   const facebook = () =>{
    window.open("https://social-login-backend.onrender.com/auth/facebook", "_self")
   }
   
  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButon google" onClick={google}>
            <img src={Google} className="icon" alt="" />
            Google
          </div>
          <div className="loginButon facebook" onClick={facebook}>
            <img src={Facebook} className="icon" alt="" />
            Facebook
          </div>
          <div className="loginButon github" onClick={github}>
            <img src={Github} className="icon" alt="" />
            Github
          </div>
        </div>
        <div className="center">
            <div className="line" />
            <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
