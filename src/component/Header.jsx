const Header = () => {
    return(
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
    )
    
}

export default Header