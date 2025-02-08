import React, { useEffect, useState } from 'react';

const ProductPage = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Fetch products from the backend API (NestJS)
    fetch('http://localhost:3001/products')
      .then((response) => response.json())  // Parse the JSON response
      .then((data) => {
        setProducts(data);  // Set the fetched data into the state
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false); // Handle errors
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // If loading, show a loading message
  if (loading) return <div>Loading products...</div>;

  const addToCart = (product) => {
    // Check if there are already items in the cart in localStorage
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cart); // Safe inside useEffect
      }, []);
      
  
    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex((item) => item._id === product._id);
  
    if (existingProductIndex >= 0) {
      // If the product exists, increase the quantity
      cart[existingProductIndex].quantity += 1;
    } else {
      // If the product doesn't exist, add it to the cart with quantity 1
      cart.push({ ...product, quantity: 1 });
    }
  
    // Store the updated cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    alert('Product added to cart!');
  };

  return (
    <div className='text-black' >
      <h1>Product List</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            {/* Button to add product to the cart */}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
