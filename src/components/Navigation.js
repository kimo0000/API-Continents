import {NavLink} from 'react-router-dom';
import './style/Navigation.css';


const Navigation = () => {
    return (
        <div className="navigation">
          
          <ul>
             <NavLink to='/' className={nav => (nav.isActive ? 'nav_active' : '')}>
               <li>Home</li>
            </NavLink>
             <NavLink to='/about' className={nav => (nav.isActive ? 'nav_active' : '')}>
               <li>About</li>
            </NavLink>
          </ul>
        </div>
    )
}

export default Navigation;