import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import './App.css';
import { ShoppingCartProvidor } from './context/ShoppingCartContext';
import { useEffect, useState } from 'react';

export type product = {
  id: number,
  title: string,
  image: string,
  price: number
}

function App() {
  const [products, setProducts] = useState<[product]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=9')
            .then(res=>res.json())
            .then(json=>setProducts(json));
  }, []);
  return (
    <ShoppingCartProvidor>
      <Navbar />
      <div className="products">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </ShoppingCartProvidor>
  )
}

export default App
