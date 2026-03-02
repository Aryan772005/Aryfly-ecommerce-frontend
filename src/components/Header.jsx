import { Link } from 'react-router-dom';

function Header({ onCartToggle, onAccountToggle, onOrdersToggle, onMenuToggle, toggleTheme, isDarkMode, cartCount, offerText }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top shadow py-3">
      <div className="container-fluid px-4">
        <div className="d-flex align-items-center">
          {/* Menu Toggle (Mobile/Professional Style) */}
          <button className="btn btn-link text-white p-0 me-3 d-lg-none" onClick={onMenuToggle}>
            <i className="bi bi-list fs-2 text-danger"></i>
          </button>
          <Link className="navbar-brand fw-bold text-danger fs-3 neon-text" to="/">ARYFLY</Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
            <li className="nav-item me-4">
              <Link className="nav-link fw-bold p-0" to="/">HOME</Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link fw-bold p-0" to="/men">MEN</Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link fw-bold p-0" to="/women">WOMEN</Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link fw-bold p-0" to="/collection">COLLECTION</Link>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center gap-3 gap-md-4">
          <div id="live-offer-badge" className="live-badge d-none d-xl-block" style={{ fontSize: '0.7rem' }}>{offerText}</div>

          {/* Theme Toggle */}
          <button className="btn btn-link text-white p-0" onClick={toggleTheme} title="Toggle Theme">
            <i className={`bi ${isDarkMode ? 'bi-sun-fill text-warning' : 'bi-moon-fill text-primary'} fs-5`}></i>
          </button>

          <button className="btn btn-link text-white p-0 position-relative" onClick={onOrdersToggle} title="My Orders">
            <i className="bi bi-box-seam fs-5"></i>
          </button>

          <button className="btn btn-link text-white p-0 position-relative" onClick={onAccountToggle} title="My Account">
            <i className="bi bi-person-circle fs-5"></i>
          </button>

          <button className="btn btn-link text-white p-0 position-relative" onClick={onCartToggle} title="Shopping Cart">
            <i className="bi bi-bag-check fs-5"></i>
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
