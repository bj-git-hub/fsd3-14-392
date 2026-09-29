const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "React design pattern",
  price: 899,
  quantity: 10,
  rating: 4.7,
};

const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "The Road to React",
  price: 1259,
  quantity: 12,
  rating: 4.9,
};

function Book(props) {
  console.log(props)
  return (
    <div>
      <img
        src={props.book.picUrl}
        alt={props.book.bname}
      />
      <h1>{props.book.bname}</h1>
      <h2>Price: {props.book.price}</h2>
      <h3>Quantity: {props.book.quantity}</h3>
      <h3>Rating: {props.book.rating}</h3>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Book book={b2} />
      <h1>Hello React</h1>
      <Book book={b1} />
    </>
  );
}