const b1 = {
  picurl: "https://m.media-amazon.com/images/I/514PDnLfatL._SX342_SY445_FMwebp_.jpg",
  bname: "React Design Pattern",
  price: 3741,
  quantity: 10,
  rating: 4.3,
};

const b2 = {
  picurl: "https://m.media-amazon.com/images/I/91uFdkCJmAL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "Learning React",
  price: 3500,
  quantity: 12,
  rating: 4.5,
};

function Book(props) {
  const { bname, price, quantity, rating, picurl } = props.book;

  return (
    <div className="book-card">
      <div className="book-image-container">
        <img src={picurl} alt={bname} className="book-image" />
      </div>

      <div className="book-content">
        <span className="book-category">PROGRAMMING</span>

        <h2 className="book-title">{bname}</h2>

        <div className="rating">
          <span className="stars">★★★★★</span>
          <span className="rating-number">{rating}</span>
        </div>

        <div className="book-info">
          <div className="info-item">
            <span className="info-label">Price</span>
            <span className="price">₹{price}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Stock</span>
            <span className="quantity">{quantity} available</span>
          </div>
        </div>

        <button className="buy-btn">
          <span>Buy Now</span>
          <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div>
          <p className="eyebrow">EXPLORE • LEARN • BUILD</p>
          <h1>Online Bookstore</h1>
          <p className="subtitle">
            Curated books for developers who want to build better software.
          </p>
        </div>

        <div className="header-badge">
          <span className="badge-dot"></span>
          100+ Books
        </div>
      </header>

      <main className="container">
        <Book book={b1} />
        <Book book={b2} />
        <Book book={b1} />
        <Book book={b2} />
      </main>
    </div>
  );
}