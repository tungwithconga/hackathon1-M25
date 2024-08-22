import React, { useState, useEffect } from 'react';
import { Product } from '@/app/api/database/products';
import styles from '../styles/Home.module.css';

interface ProductFormProps {
  onSave: (product: Product) => void;
  product?: Product;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSave, product }) => {
  const [productName, setProductName] = useState(product?.productName || '');
  const [price, setPrice] = useState(product?.price || 0);
  const [image, setImage] = useState(product?.image || '');
  const [quantity, setQuantity] = useState(product?.quantity || 0);

  useEffect(() => {
    if (product) {
      setProductName(product.productName);
      setPrice(product.price);
      setImage(product.image);
      setQuantity(product.quantity);
    }
  }, [product]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ id: product?.id || Date.now(), productName, price, image, quantity });
    setProductName('');
    setPrice(0);
    setImage('');
    setQuantity(0);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label htmlFor="productName">Tên sản phẩm:</label>
        <input
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="price">Giá:</label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Hình ảnh:</label>
        <input
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="quantity">Số lượng:</label>
        <input
          id="quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
        />
      </div>
      <button type="submit">{product ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm'}</button>
    </form>
  );
};

export default ProductForm;
