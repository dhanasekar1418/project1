import logo1 from "../images/logo.png";
const Header = () => {
  return (
    <div className="align">
        
      <nav className="header">
        <img src={logo1} alt="logo" className="logo"></img> 
        <ul className="navbar">
          <li>HOME</li>
          <li>TEAMS</li>
          <li>PLAYERS</li>
          <li>STATS</li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
