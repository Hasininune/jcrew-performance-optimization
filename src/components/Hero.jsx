import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <span className="hero-tag">
          NEW SUMMER COLLECTION
        </span>

        <h1>
          Modern Classics
          <br />
          for Everyday Living.
        </h1>

        <p>
          Discover premium wardrobe essentials crafted with timeless
          design, exceptional comfort, and quality that lasts season
          after season.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Shop New Arrivals
          </button>

          <button className="secondary-btn">
            View Lookbook
          </button>
        </div>

        <div className="hero-features">
          <span>✓ Free Shipping</span>
          <span>✓ Easy Returns</span>
          <span>★★★★★ 4.8 Rating</span>
        </div>

      </div>

      <div className="hero-image">
       <img
  src="/hero.webp"
  alt="Model wearing the latest summer collection"
  width="700"
  height="850"
  fetchPriority="high"
  decoding="async"
/>
      </div>
    </section>
  );
}

export default Hero;