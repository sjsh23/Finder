import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="navbar-brand">FINDER</div>
          <div className="navbar-search">
            <input type="text" placeholder="Masukkan nama lokasi/area/alamat" />
            <button>Cari</button>
          </div>
          <div className="navbar-menu">
            <a href="#">Cari Apa?</a>
            <button>Masuk</button>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>FIN<br></br>DER</h1>
          <h2>Temukan kos yang sesuai untuk dirimu dengan FINDER </h2>
          <button className="hero-button">Temukan Kos</button>
        </section>
        <section className="recommended-areas">
          <h2>Rekomendasi Area Kos</h2>
          <div className="area-cards">
            {[
              'Jakarta', 
              'Bandung', 
              'Tangerang', 
              'Semarang', 
              'Malang', 
              'Surabaya', 
              'Bali', 
              'Yogyakarta'
            ].map((area) => (
              <div key={area} className="area-card">
                <img src={`${process.env.PUBLIC_URL}/Pic/${area.toLowerCase()}.jpg`} alt={area} />
                <p>{area}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-content">
          <p>Dapatkan "Info kost yang murah" hanya di Finder App. Mau "Sewa Kost Murah dan Nyaman"?</p>
          <nav>
            <a href="#">Tentang Kami</a>
            <a href="#">Promosikan Kost Anda</a>
            <a href="#">Pusat Bantuan</a>
          </nav>
          <div className="contact-info">
            <p>HUBUNGI KAMI</p>
            <p>cs@FINDER.com</p>
            <p>+628969696969</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 

export default App;
