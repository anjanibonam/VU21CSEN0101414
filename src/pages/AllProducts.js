// src/pages/AllProducts.js
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../components/styles.css'; // Ensure you import the CSS file

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Mock API response
    const mockData = [
      {
        id: 1,
        name: 'Apple iPhone 14 Pro',
        category: 'Phone',
        price: 999, // Price in USD
        rating: 4.7,
        availability: 'In Stock',
        image: '/images/iphone.jpg'
      },
      {
        id: 2,
        name: 'Google Pixel 7',
        category: 'Phone',
        price: 699, // Price in USD
        rating: 4.5,
        availability: 'In Stock',
        image: '/images/pixel7.jpg'
      },
      {
        id: 3,
        name: 'HP Spectre x360',
        category: 'Laptop',
        price: 1299, // Price in USD
        rating: 4.6,
        availability: 'In Stock',
        image: '/images/hp-spectre.jpg'
      },
      {
        id: 4,
        name: 'Lenovo ThinkPad X1 Carbon',
        category: 'Laptop',
        price: 1449, // Price in USD
        rating: 4.8,
        availability: 'In Stock',
        image: '/images/lenovo-thinkpad.jpg'
      },
      {
        id: 5,
        name: 'Bose QuietComfort 35 II',
        category: 'Headphones',
        price: 299, // Price in USD
        rating: 4.9,
        availability: 'In Stock',
        image: '/images/bose-headphones.jpg'
      },
      {
        id: 6,
        name: 'Garmin Forerunner 945',
        category: 'Wearable',
        price: 599, // Price in USD
        rating: 4.6,
        availability: 'In Stock',
        image: '/images/garmin-forerunner.jpg'
      },
      {
        id: 7,
        name: 'DJI Mini 2',
        category: 'Drone',
        price: 449, // Price in USD
        rating: 4.7,
        availability: 'In Stock',
        image: '/images/dji-mini.jpg'
      },
      {
        id: 8,
        name: 'Kindle Oasis',
        category: 'E-Reader',
        price: 249, // Price in USD
        rating: 4.8,
        availability: 'In Stock',
        image: '/images/kindle-oasis.jpg'
      },
      {
        id: 9,
        name: 'Amazon Echo Studio',
        category: 'Smart Home',
        price: 199, // Price in USD
        rating: 4.4,
        availability: 'In Stock',
        image: '/images/echo-studio.jpg'
      },
      {
        id: 10,
        name: 'Fitbit Versa 3',
        category: 'Wearable',
        price: 229, // Price in USD
        rating: 4.3,
        availability: 'In Stock',
        image: '/images/fitbit-versa.jpg'
      }
    ];

    setProducts(mockData);
    setFilteredProducts(mockData);
  }, []);

  const filterByCategory = (category) => {
    setFilteredProducts(products.filter(product => product.category === category));
  };

  const sortByPrice = (order) => {
    const sorted = [...filteredProducts].sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
    setFilteredProducts(sorted);
  };

  const resetFilters = () => {
    setFilteredProducts(products);
  };

  return (
    <div className="all-products-container">
      <h1>All Products</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button className="button" onClick={() => filterByCategory('Phone')}>Filter by Phones</button>
        <button className="button" onClick={() => sortByPrice('asc')}>Sort by Price (Asc)</button>
        <button className="button" onClick={() => sortByPrice('desc')}>Sort by Price (Desc)</button>
        <button className="reset-button" onClick={resetFilters}>Reset</button> {/* Reset button */}
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
