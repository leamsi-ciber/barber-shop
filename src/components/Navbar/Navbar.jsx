import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>New Era</h2>
      </div>
      <div className="menu">
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
      </div>
    </div>
  );
};

export default Navbar;
