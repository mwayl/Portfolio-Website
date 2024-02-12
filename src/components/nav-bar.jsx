import React, { useState } from "react";
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import { MenuOutlined } from "@material-ui/icons";
import {  HashLink as Link} from "react-router-hash-link";
import './style/nav-bar.scss';
import Main from './main.jsx';
import About from './about.jsx';
import Portfolio from './portfolio.jsx';
import Footer from './footer.jsx';

function NavBar() {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  }

  return (

      <nav className="nav">
        <h1 className="logo">@Muhammad Wayl</h1>

        <ul className={active ? 'navbar_active' : 'navbar'}>

          {/* <IconButton> */}
            {/* <CloseIcon className="close" onClick={showMenu} /> */}
          {/* </IconButton> */}
          <li><Link to="#main" smooth>Home</Link></li>
          <li><Link to="#about" smooth>About</Link></li>
          <li><Link to="#portfolio" smooth>Portfolio</Link></li>
          <li><Link to="#footer" smooth>Contact</Link></li>
          {/* Add other navigation items as needed */}
        </ul>
       

        <div className="changer">
          {/* <MenuOutlined className="menu" onClick={showMenu} /> */}
        </div>
      </nav>
    
  );
}

export default NavBar;