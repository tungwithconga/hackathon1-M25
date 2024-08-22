"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '@/app/components/ProductList';
import ProductForm from '@/app/components/ProductForm';
import { Product } from '@/app/api/database/products';
import styles from '@/app/styles/Home.module.css';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios.get<Product[]>('/api/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleSaveProduct = (product: Product) => {
    if (editingProduct) {
      axios.put(`/api/products/${product.id}`, product).then(() => {
        setProducts((prev) =>
          prev.map((p) => (p.id === product.id ? product : p))
        );
        setEditingProduct(null);
      });
    } else {
      axios.post('/api/products', product).then((response) => {
        setProducts((prev) => [...prev, response.data]);
      });
    }
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
  };

  const handleDeleteProduct = (id: number) => {
    axios.delete(`/api/products/${id}`).then(() => {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    });
  };

  return (
    <div className={styles.container}>
      <h1>Quản lý sản phẩm</h1>
      <ProductForm onSave={handleSaveProduct} product={editingProduct} />
      <ProductList products={products} onEdit={handleEditProduct} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default Home;
