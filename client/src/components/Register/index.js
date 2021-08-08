import './index.css';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='main-container'>
            <div className="welcome">
                <h2>Register</h2>
            </div>
            <main className="card">

                <form>
                    <div className="email">
                        <input placeholder='E-mail'></input>
                        <i className='fas fa-user-alt email-icon' aria-hidden='true'></i>
                    </div>

                    <div className="password">
                        <input placeholder='Password'></input>
                        <i className="fas fa-lock password-icon" aria-hidden='true'></i>
                    </div>
                    
                    <button type='submit' className='submit-btn'>
                        <Link to='/mytips'>
                            Register
                        </Link>
                        
                    </button>
                </form>
                <div className="register">
                    <p>
                        Already have an account? 
                        <Link to='/'>Log in!</Link>
                    </p>
                </div>
            </main>
        </div>
     );
}
 
export default Register;