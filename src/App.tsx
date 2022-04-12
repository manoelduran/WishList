import React from 'react';
import WishListView from './components/WishListView';
import { WishList } from './models/WishList';

const list = [
  {
    "name": "Chronicles of Narnia",
    "price": 28.73,
},
{
    "name": "Pokemon",
    "price": 300.00,
},
{
    "name": "Zelda",
    "price": 273.76,
},
]

const App: React.FC = () => {
  return (
    <>
    <WishListView items={list} />
    </>
  );
};

export default App;
