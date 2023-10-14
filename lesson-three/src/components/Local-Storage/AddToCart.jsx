import React, { useEffect, useState } from "react";

const AddToCart = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const AddToCart = (id) => {
    localStorage.setItem(id, "cart added");
  };
  return (
    <div>
      <div className="grid grid-cols-3 mx-28 mt-5 gap-3 mb-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-amber-400 p-5 rounded-lg text-center
          "
          >
            <h1>{product.name}</h1>
            <h1>{product.price}</h1>
            <h1>{product.id}</h1>
            <button
              onClick={() => AddToCart(product.id)}
              className="py-1 px-2 rounded-md text-white bg-slate-500"
            >
              add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddToCart;
