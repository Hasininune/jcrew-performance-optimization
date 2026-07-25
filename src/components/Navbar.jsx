import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">J.CREW</div>

      <nav>
        <ul className="nav-links">
          <li><a href="#">Women</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Kids</a></li>
          <li><a href="#">New</a></li>
          <li><a href="#">Sale</a></li>
        </ul>
      </nav>

     <button type="button" aria-label="Search">
  🔍
</button>

<button type="button" aria-label="Account">
  👤
</button>

<button type="button" aria-label="Shopping bag">
  🛒
</button>
    </header>
  );
}

export default Navbar;