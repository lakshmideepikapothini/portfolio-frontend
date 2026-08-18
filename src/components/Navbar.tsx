const Navbar = () => {
  const links = [
    { label: 'Hero', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#footer' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a className="logo" href="#hero">
            <img
              src="https://thumbs.dreamstime.com/b/initial-lp-letter-logo-design-vector-template-abstract-script-206634367.jpg?w=768"
              alt="Lakshmi Deepika Pothini logo"
              className="brand-logo"
            />
            <span className="brand-name">LAKSHMI DEEPIKA POTHINI</span>
          </a>
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href} className="nav-link">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="availability-bar">
        <span className="availability-dot" aria-hidden="true" />
        <span>I’m open for opportunities</span>
      </div>
    </>
  );
};

export default Navbar;