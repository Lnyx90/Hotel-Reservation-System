const { useState } = React;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </button>

      <nav className={`sidebar ${menuOpen ? "active" : ""}`}>
        <h2>Xanthe Hotel</h2>
        <ul>
          <li><a href="#rooms">Check Our Rooms</a></li>
          <li><a href="#dine">Dine With Us</a></li>
          <li><a href="#meeting">Meeting</a></li>
          <li><a href="#wedding">Wedding</a></li>
          <li><a href="#facilities">Our Facilities</a></li>
          <li><a href="#offers">Hotel Promotions</a></li>
        </ul>
      </nav>

      {/* Video Section */}
      <section className="video-section">
        <video autoPlay muted loop>
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="video-overlay"></div>
        <div className="hotel-name">Xanthe Hotel</div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card" id="rooms">
          <img src="rooms.jpg" alt="Rooms" />
          <div className="overlay">
            <h3>CHECK OUR ROOMS</h3>
          </div>
        </div>

        <div className="feature-card" id="dine">
          <img src="dine.jpg" alt="Dine" />
          <div className="overlay">
            <h3>DINE WITH US</h3>
          </div>
        </div>

        <div className="feature-card" id="facilities">
          <img src="facilities.jpg" alt="Facilities" />
          <div className="overlay">
            <h3>OUR FACILITIES</h3>
          </div>
        </div>

        <div className="feature-card" id="wedding">
          <img src="wedding.jpg" alt="Wedding" />
          <div className="overlay">
            <h3>WEDDING</h3>
          </div>
        </div>

        <div className="feature-card" id="offers">
          <img src="offers.jpg" alt="Offers" />
          <div className="overlay">
            <h3>SPECIAL OFFERS</h3>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <img src="assets/facebook.png" alt="Facebook" />
          <img src="assets/instagram.png" alt="Instagram" />
          <img src="assets/twitter.png" alt="Twitter" />
        </div>

        <div className="footer-links">
          <a href="#">Work With Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div className="footer-bottom">
          © 2025 Xanthe Hotel | All Rights Reserved
        </div>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
