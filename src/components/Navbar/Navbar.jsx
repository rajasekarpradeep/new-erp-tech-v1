import { React, useState, useEffect } from 'react';
import styles from './Navbar.module.css';
// import Logo from '../../images/logo.png';
import LogoIcon from "../../assets/svg/Logo";
import {
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]} >
          <li className='semiBold font40'>
            <a href='/#'>Home</a>
          </li>
          <li className='extraBold font40'>
            <a href='/#'> <Link to="about">About Us</Link></a>
          </li>
          <li className='extraBold font40'>
            <a href='/#'>Services</a>
          </li>
          <li className='extraBold font40'>
            <a href='/#'>Courses</a>
          </li>
          <li className='extraBold font40'>
            <a href='/#'>Industry</a>
          </li>
          <li className='extraBold font40'>
            <a href='/#'><Link to="contact">Contact</Link></a>
          </li>
        </ul>
      </nav>
      <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={30}  color='white'/> : <AiOutlineMenu size={30} color='#f2b300' />}
        
      </div>
    </header>
  );
};

export default Navbar;