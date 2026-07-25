import "./Footer.css";

const footerGroups = [
  {
    title: "Help",
    links: [
      "Customer Service",
      "Track Order",
      "Returns & Exchanges",
      "Shipping",
      "International Orders & Returns",
      "Contact Us",
      "Policy on Fraudulent Activity",
    ],
  },
  {
    title: "Quick Links",
    links: ["Offers & Promotions", "My Favorites"],
  },
  {
    title: "About J.Crew",
    links: [
      "Our Story",
      "Careers",
      "Impact at J.Crew Group",
      "Investor Relations",
      "Terms of Use",
      "Privacy Policy",
      "Responsible Disclosure Policy",
    ],
  },
];

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {footerGroups.map((group) => (
            <nav
              className="footer-column"
              key={group.title}
              aria-label={group.title}
            >
              <h2>{group.title}</h2>

              <ul>
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="footer-newsletter">
            <h2>Like Being First?</h2>

            <p>
              Get can't-miss style news, new arrivals and updates.
            </p>

            <form
              className="newsletter-form"
              onSubmit={handleSubmit}
            >
              <label htmlFor="footer-email">
                Email address
              </label>

              <div className="newsletter-input">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />

                <button type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div
            className="social-links"
            aria-label="Social media"
          >
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="X">𝕏</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Pinterest">p</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="Instagram">◎</a>
          </div>

          <div className="footer-country">
            <span>India</span>
            <span aria-hidden="true">🇮🇳</span>
          </div>

          <div className="footer-brands">
            <span>MADEWELL</span>
            <strong>J.CREW</strong>
          </div>

          <p className="footer-copy">
            © 2026 J.Crew — Performance recreation for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;