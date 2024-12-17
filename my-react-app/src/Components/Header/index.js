import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="wave"
        className="logo"
        src="https://therunawaycrew.com/wp-content/uploads/2024/07/Group-427.png"
      />
    </div>
    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          HOME
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/BuilderInsidePage">
        NECKLACE
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/BraceletPage">
        BRACELET
        </Link>
      </li>
     
    </ul>
  </nav>
)

export default Header
