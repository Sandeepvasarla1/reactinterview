import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Axioscall.css'; 

function Axioscall() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="container">
            <h1>Main Page</h1>
            <div className="products">
                {products.map((product, index) => (
                    <div className="product" key={index}>
                        <img src={product.image} alt={product.title} className="product-image" />
                        <div className="product-details">
                            <h2 className="product-title">{product.title}</h2>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Axioscall;
