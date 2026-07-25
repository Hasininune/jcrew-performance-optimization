import "./Collections.css";

const collections = [
  {
    id: 1,
    title: "Women",
    image: "/women.webp",
    description: "Elegant essentials designed for every occasion."
  },
  {
    id: 2,
    title: "Men",
    image: "/men.webp",
    description: "Modern classics crafted with premium comfort."
  },
  {
    id: 3,
    title: "Kids",
    image: "/kids.webp",
    description: "Playful styles made for every adventure."
  }
];

function Collections() {
  return (
    <section className="collections">

      <div className="section-title">

        <span>OUR COLLECTIONS</span>

        <h2>Discover Your Style</h2>

        <p>
          Explore timeless collections carefully designed
          for every member of the family.
        </p>

      </div>

      <div className="collection-grid">

        {collections.map((item) => (

          <div className="collection-card" key={item.id}>

            <img
  src={item.image}
  alt={`${item.title} collection`}
  loading="lazy"
  decoding="async"
  width="600"
  height="750"
/>

            <div className="card-content">

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <button>Shop Now →</button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Collections;