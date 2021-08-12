import "./index.css";
import { Link } from "react-router-dom";
import footer from "../Footer";

const Home = () => {
  return (
    <div className="background">
      <div className="main-container">
        <div className="welcome">
          <h2>Welcome to MooLah</h2>
        </div>
        <main className="login-card">
          <form>
            <div className="email">
              <input placeholder="E-mail"></input>
              <i className="fas fa-user-alt email-icon" aria-hidden="true"></i>
            </div>


                <form>
                    <div className="email">
                        <input placeholder='Username'></input>
                        <i className='fas fa-user-alt email-icon' aria-hidden='true'></i>
                    </div>


            <button type="submit" className="submit-btn">
              <Link to="/mytips">Sign in</Link>
            </button>
          </form>
          <div className="register">
            <p>
              New around here?
              <Link to="/register">Sign Up!</Link>
            </p>
          </div>
        </main>
        {footer}
      </div>
    </div>
  );
};

export default Home;
