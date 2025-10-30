import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// TerraPods brand yellow
const TERRAPODS_YELLOW = "#D6A900";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

const MarketplaceMember = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // TODO: Fetch products for this member from backend API
    const mockProducts: Product[] = [
      {
        id: "1",
        name: "Handmade Mycelium Lamp",
        description: "Eco-friendly lighting made from mycelium.",
        price: "$120",
        imageUrl:
          "https://images.unsplash.com/photo-1503602642458-232111445657",
      },
      {
        id: "2",
        name: "Organic Kombucha Starter Kit",
        description: "Everything you need to start your kombucha journey.",
        price: "$50",
        imageUrl:
          "https://images.unsplash.com/photo-1556912990-8d5a4b3fdbb1",
      },
    ];
    setProducts(mockProducts);
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        🛒 My Marketplace
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-4"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-lg font-bold mt-2">{product.price}</p>
            <button
              className={`mt-4 bg-[${TERRAPODS_YELLOW}] text-white py-2 px-4 rounded-full hover:bg-[#b38a00]`}
            >
              View Product
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceMember;
