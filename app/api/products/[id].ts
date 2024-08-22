import type { NextApiRequest, NextApiResponse } from 'next';
import products, { Product } from '@/app/api/database/products';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const productId = parseInt(id as string);
  const index = products.findIndex(p => p.id === productId);

  if (index !== -1) {
    if (req.method === 'GET') {
      res.status(200).json(products[index]);
    } else if (req.method === 'PUT') {
      const { productName, price, image, quantity } = req.body as Product;
      products[index] = { id: productId, productName, price, image, quantity };
      res.status(200).json(products[index]);
    } else if (req.method === 'DELETE') {
      products.splice(index, 1);
      res.status(204).end();
    } else {
      res.status(405).end();
    }
  } else {
    res.status(404).json({ message: "Sản phẩm không tồn tại" });
  }
}
