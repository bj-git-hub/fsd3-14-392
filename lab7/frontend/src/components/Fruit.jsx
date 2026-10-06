import React from 'react'


const products = [
    {title: "tomato", id:1, isFruit: true},
    {title: "Potato", id:2, isFruit: false},
    {title: "banana", id:3, isFruit: true},
    {title: "apple", id:4, isFruit: true},
];

const ListItem = products.map((item) => (
    <li key = {item.id} >{item.title}</li>
));

console.log(ListItem);

const Fruit = () => {
  return (
    <ul>
        {ListItem}
    </ul>
  )
}

export default Fruit
