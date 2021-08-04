import './index.css';
import { Link } from 'react-router-dom';

const navBar =
        <nav>
            <Link to='Calendar'>Calendar</Link>
            <Link to='Graph'>Graph</Link>
            <Link to='Dashboard'>Me</Link>
            <Link to='News'>News</Link>
            <Link to='Settings'>Settings</Link>
        </nav>
;
 
export default navBar;