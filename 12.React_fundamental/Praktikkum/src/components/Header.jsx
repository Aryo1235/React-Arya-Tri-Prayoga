const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h3>SIMPLE HEADER</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-5">
              <li className="nav-item me-3">
                <a
                  className="nav-link active text-bg-primary rounded-2 fw-normal"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link text-primary fw-normal" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link text-primary fw-normal" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link text-primary fw-normal">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
