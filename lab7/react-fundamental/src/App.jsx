// function must return single element
// <></>: fragments can be used to group multiple elements.



function Hello(args){
  return(
    <> 
    <img src={args.imageUrl} alt={args.name}/>
    <h1>{args.name}</h1>
    <h2>Rs. {args.price}</h2>
    <h3>Author: {args.author}</h3>
    </>
  )
}

export default function App() {
  
  
  const books=[
  {
    "name": "Atomic Habits",
    "price": 499,
    "author": "James Clear",
    "ratings": 4.8,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
  },
  {
    "name": "The Alchemist",
    "price": 299,
    "author": "Paulo Coelho",
    "ratings": 4.6,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg"
  },
  {
    "name": "Rich Dad Poor Dad",
    "price": 399,
    "author": "Robert T. Kiyosaki",
    "ratings": 4.5,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg"
  },
  {
    "name": "Ikigai",
    "price": 350,
    "author": "Hector Garcia and Francesc Miralles",
    "ratings": 4.4,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780143130727-L.jpg"
  },
  {
    "name": "The Psychology of Money",
    "price": 450,
    "author": "Morgan Housel",
    "ratings": 4.7,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg"
  },
  {
    "name": "Deep Work",
    "price": 550,
    "author": "Cal Newport",
    "ratings": 4.5,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg"
  },
  {
    "name": "Think and Grow Rich",
    "price": 250,
    "author": "Napoleon Hill",
    "ratings": 4.3,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg"
  },
  {
    "name": "The 7 Habits of Highly Effective People",
    "price": 599,
    "author": "Stephen R. Covey",
    "ratings": 4.6,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9781982137274-L.jpg"
  },
  {
    "name": "Harry Potter and the Philosopher's Stone",
    "price": 450,
    "author": "J. K. Rowling",
    "ratings": 4.9,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780590353427-L.jpg"
  },
  {
    "name": "To Kill a Mockingbird",
    "price": 350,
    "author": "Harper Lee",
    "ratings": 4.7,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg"
  }
]
  return( 
  <>
  <h1>Hello React</h1>
<Hello name="Let us C" price="355" author="Yashwant Kanitkar"/>
  <Hello {...books[0]}/>
  {
    books.map((item)=><Hello{...item}/>)
  }
  </>
  )

}


