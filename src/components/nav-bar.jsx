import React, { useState } from "react";
import {  HashLink as Link} from "react-router-hash-link";
import './style/nav-bar.scss';


function NavBar() {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  }

  return (

      <nav className="nav">
        <h1 className="logo">@Muhammad Wayl</h1>

        <ul className={active ? 'navbar_active' : 'navbar'}>

        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" className="close" onClick={showMenu}>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
          {/* <IconButton> */}
            {/* <CloseIcon className="close" onClick={showMenu} /> */}
          {/* </IconButton> */}
          <li><Link to="#main" smooth>Home</Link></li>
          <li><Link to="#about" smooth>About</Link></li>
          <li><Link to="#portfolio" smooth>Projects</Link></li>
          <li><Link to="#footer" smooth>Contact</Link></li>
          {/* Add other navigation items as needed */}
        </ul>
       

        <div className="changer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16" className="menu" onClick={showMenu}>
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>

          {/* <MenuOutlined className="menu" onClick={showMenu} /> */}
        </div>
      </nav>
    
  );
}

export default NavBar;