import React from 'react';
import { Product } from '@/app/api/database/products';
import styles from '../styles/Home.module.css';

interface ProductListProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Hình ảnh</th>
            <th>Số lượng</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.image} alt={product.productName} width="50" />
              </td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => onEdit(product)}>Sửa</button>
                <button onClick={() => onDelete(product.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
