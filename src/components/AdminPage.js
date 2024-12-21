import React, { useState } from 'react';
import { useProductContext } from './ProductContext.js';

const AdminPage = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  const { products, addProduct, updateProduct, deleteProduct } = useProductContext();

  const handleAddProduct = () => {
    if (productName && productPrice) {
      const newProduct = {
        id: Date.now(),
        name: productName,
        price: parseFloat(productPrice),
      };

      addProduct(newProduct);
      setProductName('');
      setProductPrice('');
    } else {
      alert('Please enter both name and price.');
    }
  };

  const handleEditProduct = (product) => {
    setIsEditing(true);
    setEditProductId(product.id);
    setProductName(product.name);
    setProductPrice(product.price);
  };

  const handleUpdateProduct = () => {
    if (productName && productPrice) {
      const updatedProduct = {
        id: editProductId,
        name: productName,
        price: parseFloat(productPrice),
      };

      updateProduct(updatedProduct);
      setIsEditing(false);
      setEditProductId(null);
      setProductName('');
      setProductPrice('');
    } else {
      alert('Please enter both name and price.');
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditProductId(null);
    setProductName('');
    setProductPrice('');
  };

  // New function to handle product deletion
  const handleDeleteProduct = (productId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
      deleteProduct(productId);
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin Page</h1>
      <div>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        {isEditing ? (
          <div>
            <button onClick={handleUpdateProduct}>Update Product</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        ) : (
          <button onClick={handleAddProduct}>Add Product</button>
        )}
      </div>

      <h2>Product List</h2>
      <ul>
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((product) => (
            <li key={product.id}>
              {product.name} - ₹{product.price}
              <button onClick={() => handleEditProduct(product)}>Edit</button>
              <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AdminPage;
