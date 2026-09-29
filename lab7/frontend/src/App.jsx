const bl={
  picUrl: "https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "React design pattern",
  price:1199,
  quantity:10,
  rating:4.7,
};
function Book(){
  return (
    <div>
      <img src={b1.picUrl}
      alt={b1.bname}/>
    <h1> {b1.bname}</h1>
    <h2> {b1.price}</h2>
    <h3> {b1.quantity}: 3</h3>
    <h3> {b1.rating}: 3</h3>
    </div>
  );
}


export default function App(){
  return(
    <>
    <h1>Hello React</h1>
    <Book/>

    </>
  );
}