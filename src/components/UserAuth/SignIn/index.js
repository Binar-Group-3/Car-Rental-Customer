import "./style.css";
import { Link } from "react-router-dom";
import bcr from "../../../assets/cover-login.png";
import rectangle from "../../../assets/rectangle.png";

const SignIn = (props) => {
  const { handleEmail, handlePassword, email, password, handleSubmit, logging } = props;

  return (
    <>
      <div className="signin">
        <div className="signin__left">
          <div className="signin__container">
            <div className="signin__logo">
              <Link to="/">
                <img src={rectangle} alt="BCR" />
              </Link>
            </div>
            <h2>Welcome Back!</h2>
            <form onSubmit={handleSubmit} className="signin__form">
              <div className="signin__email">
                <div className="signin__label">
                  <label>Email</label>
                </div>
                <input onChange={handleEmail} value={email} type="text" required />
              </div>
              <div className="signin__password">
                <div className="signin__label">
                  <label>Password</label>
                </div>
                <input onChange={handlePassword} value={password} type="password" required />
              </div>
              <button className="button">Sign In</button>
            </form>
            <div className="signin__signup">
              <p>Don't have an account?</p>
              <Link to="/registration">Sign Up for free</Link>
            </div>
            {logging && (
              <div>
                <p>Signing...</p>
              </div>
            )}
          </div>
        </div>
        <div className="signin__right">
          <img src={bcr} alt="BCR" />
        </div>
      </div>
    </>
  );
};

export default SignIn;
