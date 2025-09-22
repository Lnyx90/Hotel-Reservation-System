const { useState } = React;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </button>

      <nav className={`sidebar ${menuOpen ? "active" : ""}`}>
        <h2>Nyx Hotel</h2>
        
        <ul>
          <li><a href="#rooms">Check Our Rooms</a></li>
          <li><a href="#dine">Dine With Us</a></li>
          <li><a href="#facilities">Our Facilities</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Video Section */}
      <section className="video-section">
        <video autoPlay muted loop>
          <source src="public/video/Resort.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="video-overlay"></div>
        <div className="title-content">
          <h2>Nyx Hotel</h2>
          <button className="book-btn">Book a Room</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="rooms" className="bg-gradient-to-b from-white to-[#fbf9f7] py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-['Playfair_Display'] text-[26px]">Rooms & Suites</h2>
          <p className="text-gray-500">
            A range of accommodations from intimate suites to private penthouses. Each room carefully
            designed for comfort and alpine views.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-black/5">
              <div
                className="h-40 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1505691723518-36a0ad6e9f5b?auto=format&fit=crop&w=1200&q=60')",
                }}
              ></div>
              <div className="p-4">
                <h3 className="font-['Playfair_Display'] text-lg mb-2">Deluxe Room</h3>
                <p className="text-sm text-gray-500 mb-2">King bed • 40m²</p>
                <p className="text-gray-500 m-0">
                  Warm materials, elegant furnishings and sweeping view of the slopes.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-black/5">
              <div
                className="h-40 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=60')",
                }}
              ></div>
              <div className="p-4">
                <h3 className="font-['Playfair_Display'] text-lg mb-2">Suite</h3>
                <p className="text-sm text-gray-500 mb-2">King bed • Living area</p>
                <p className="text-gray-500 m-0">
                  Separate living room, refined details and private balcony.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-black/5">
              <div
                className="h-40 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1551882547-ff40c63f4f2f?auto=format&fit=crop&w=1200&q=60')",
                }}
              ></div>
              <div className="p-4">
                <h3 className="font-['Playfair_Display'] text-lg mb-2">Penthouse</h3>
                <p className="text-sm text-gray-500 mb-2">Two bedrooms • Terrace</p>
                <p className="text-gray-500 m-0">
                  Expansive terrace, private services and panoramic vistas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
        <div className="social-icons">
          <a href=""><i class="fa-brands fa-instagram"></i></a>
          <a href=""><i class="fa-brands fa-facebook"></i></a>
          <a href=""><i class="fa-brands fa-twitter"></i></a>

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
