export default function Nav({ links }) {
  const navStyle = {
    position: 'absolute',
    top: 0,
    width: '100%',
    marginBottom: '25px',
    backgroundColor: '#68bac9'
  };

  return (
    <nav className="navbar navbar-expand-lg" style={navStyle}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="collapse navbar-collapse justify-content-start align-items-center" id="navbarNav">
            {links[0]}
            <ul className="navbar-nav mx-5">
              {links.slice(1).map((link, index) => (
                <li key={index} className="nav-item">
                  <h6>{link}</h6>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}