// // "use client";
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

// const ProductDetails = () => {
//   const router = useRouter();
//   const { id } = router.query; // Extract the product ID from the URL
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     if (id) {
//       // Fetch product details from the backend
//       fetch(`http://localhost:3001/product/${id}`)
//         .then((res) => res.json())
//         .then((data) => setProduct(data))
//         .catch((err) => console.error(err));
//     }
//   }, [id]);

//   if (!product) {
//     return <p>Loading product details...</p>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl mt-10 text-black">
//       <h1 className="text-3xl font-bold">{product.name}</h1>
//       <p className="text-gray-600">{product.description}</p>
//       <img src={product.imageSrc} alt={product.name} className="my-4 rounded-md w-full" />
//       <p className="text-green-600 text-xl font-semibold">${product.price}</p>
//       <p className="text-gray-600">Category: {product.category}</p>
//       <p className="text-gray-600">Stock: {product.stock}</p>
//     </div>
//   );
// };

// export default ProductDetails;







  "use client";
import { useRouter } from 'next/navigation'; // Use next/navigation
import { useEffect, useState } from 'react';

const ProductDetails = () => {
  const router = useRouter(); // Updated to next/navigation

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Example logic to fetch a product detail based on query params or route
    const productId = router.query?.id; // Adjust as per your dynamic route setup
    if (productId) {
      fetchProductDetails(productId);
    }
  }, [router.query]);

  const fetchProductDetails = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/products/${id}`);
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
      } else {
        console.error('Error fetching product details:', response.statusText);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      {/* Add more product details as needed */}
      <button onClick={() => router.push('/Cart')}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
