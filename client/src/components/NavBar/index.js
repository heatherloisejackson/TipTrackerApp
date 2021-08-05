import './index.css';
import { Link } from 'react-router-dom';

const navBar =
        <nav>
            <Link to='MyTips'>My Tips</Link>
            <Link to='Graph'>Graph</Link>
            <Link to='News'>News</Link>
            <Link to='Settings'>Settings</Link>
        </nav>
;
 
export default navBar;