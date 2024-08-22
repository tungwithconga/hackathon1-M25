import type { NextApiRequest, NextApiResponse } from 'next';
import products, { Product } from '@/app/api/database/products';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(products);
  } else if (req.method === 'POST') {
    const { productName, price, image, quantity } = req.body as Product;
    const newProduct: Product = {
      id: products.length + 1,
      productName,
      price,
      image,
      quantity
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  } else {
    res.status(405).end();
  }
}
