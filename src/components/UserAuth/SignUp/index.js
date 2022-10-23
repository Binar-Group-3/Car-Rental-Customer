import "./style.css";
import { Link } from "react-router-dom";
import bcr from "../../../assets/cover-login.png";
import rectangle from "../../../assets/rectangle.png";

const SignUp = (props) => {
  const { handleEmail, handlePassword, handleName, handleSubmit, email, password, name } = props;

  return (
    <>
      <div className="signin">
        <div className="signin__left">
          <div className="signin__container">
            <div className="signin__logo">
              <img src={rectangle} alt="BCR" />
            </div>
            <h2>Welcome Back!</h2>
            <form onSubmit={handleSubmit} className="signin__form">
              <div className="signin__name">
                <div className="signin__label">
                  <label>Name</label>
                </div>
                <input onChange={handleName} value={name} type="text" />
              </div>
              <div className="signin__email">
                <div className="signin__label">
                  <label>Email</label>
                </div>
                <input onChange={handleEmail} value={email} type="text" />
              </div>
              <div className="signin__password">
                <div className="signin__label">
                  <label>Password</label>
                </div>
                <input onChange={handlePassword} value={password} type="password" />
              </div>
              <button className="button">Sign Up</button>
            </form>
            <div className="signin__signup">
              <p>Already have an account?</p>
              <Link to="/login">Sign In here</Link>
            </div>
          </div>
        </div>
        <div className="signin__right">
          <img src={bcr} alt="BCR" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
