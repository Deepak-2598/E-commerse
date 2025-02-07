import React, { useState } from 'react';

// Child Component that is memoized
const ProductCard = React.memo(({ product }) => {
  console.log(`Rendering: ${product.name}`);
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
    </div>
  );
});

// Parent Component
const ProductList = () => {
  const [count, setCount] = useState(0);
  
  // List of products
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
      
      {/* Render each product card */}
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
