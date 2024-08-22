
export type Product = {
    id: number;
    productName: string;
    price: number;
    image: string;
    quantity: number;
  };
  
  const products: Product[] = [
    {
      id: 1,
      productName: "Táo",
      price: 10000,
      image: "../images/Táo.png",
      quantity: 50
    },
    {
      id: 2,
      productName: "Chuối",
      price: 15000,
      image: "../images/Chuối.png",
      quantity: 30
    },
    {
      id: 3,
      productName: "Cam",
      price: 11000,
      image: "../images/Cam.png",
      quantity: 30
    },
    {
      id: 4,
      productName: "Nho",
      price: 12000,
      image: "../images/Nho.png",
      quantity: 30
    },
    
  
  ];
  
  export default products;
  