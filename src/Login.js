import React, { useState } from 'react';
import './App.css';  // Make sure to create corresponding CSS to style the form
import App from '/App.js';  

function Login() {
const [form, setForm] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
});

// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({
//     ...form,
//     [name]: value
//     });
// };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     if (form.password !== form.confirmPassword) {
//     alert('Passwords do not match!');
//     } else {
//       // Handle form submission logic
//     console.log('Form submitted', form);
//     }
// };

return (
    <div className="App">
    <header className="App-header">
        <nav>
        <div className="logo">FINDER</div>
        <div className="search-bar">
            <input type="text" placeholder="Masukan nama lokasi/area/alamat" />
            <button>Cari</button>
        </div>
        <div className="login">
            <button>Masuk</button>
        </div>
        </nav>
    </header>
    <main>
        <h1>Daftar Akun</h1>
        <form onSubmit={handleSubmit}>
        <label>
            Nama Lengkap
            <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Masukkan nama lengkap sesuai identitas"
            required
            />
        </label>
        <label>
            Nomor Handphone
            <input
            type="tel"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            placeholder="Isi dengan nomor handphone yang aktif"
            required
            />
        </label>
        <label>
            Email
            <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Masukkan email untuk akun Finder"
            required
            />
        </label>
        <label>
            Password
            <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Minimal 8 karakter"
            required
            />
        </label>
        <label>
            Ulangi Password
            <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Masukkan kembali password"
            required
            />
        </label>
        <button type="submit">Daftar</button>
        </form>
        <p>Sudah punya akun? <a href="#">Masuk di sini</a></p>
    </main>
    <footer>
        <div className="footer-content">
        <p>Dapatkan "info kost yang murah" hanya di Finder App. Mau "Sewa Kost Murah dan Nyaman"?</p>
        <div className="footer-links">
            <a href="#">Tentang Kami</a>
            <a href="#">Promosikan Kost Anda</a>
            <a href="#">Pusat Bantuan</a>
            <a href="#">Kebijakan Privasi</a>
            <a href="#">Syarat dan Ketentuan Umum</a>
        </div>
        <div className="footer-contact">
            <p>HUBUNGI KAMI</p>
            <p>cs@FINDER.com</p>
            <p>+628969696969</p>
        </div>
        </div>
    </footer>
    </div>
);
}

export default Login;
