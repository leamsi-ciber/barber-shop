import './Navbar.css'
import Image from '../../assets/images/newera.png'
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Image} className='logo'/>
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Styles</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
