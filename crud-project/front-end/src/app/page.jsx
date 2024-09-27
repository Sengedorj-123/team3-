// import { ProductCard } from "@/components/Card";

// export default function Home() {
//   return (
//     <div className="container m-auto flex items-center justify-center flex-col rounded-[20px]">
//       <div className="pt-[30px]">
//         <button className="border p-[15px] bg-green-500 rounded-[10px] ">
//           baraa uusgeh
//         </button>
//       </div>
//       <div className="w-[550px] h-[450px] border rounded-[20px]  ">
//         <header className="w-full h-[60px] border flex rounded-t-[20px]">
//           <button className="ml-[20px] mt-[10px]">X</button>
//           <h1 className="ml-[190px] mt-[20px]">Baraa uusgeh</h1>
//         </header>
//         <div className="flex justify-center flex-col items-center gap-3">
//           <h1>baraanii ner</h1>
//           <input
//             type="text"
//             placeholder="Type here"
//             className="input input-bordered w-full max-w-xs"
//           />
//           <h1>baraanii angilal</h1>
//           <select className="select select-bordered w-full max-w-xs">
//             <option disabled selected>
//               Angilal
//             </option>
//             <option>tsamts</option>
//             <option>umd</option>
//             <option>gaduur huvtsas</option>
//             <option>gutal</option>
//           </select>
//           <h1>une</h1>
//           <input
//             type="text"
//             placeholder="0000000$"
//             className="input input-bordered w-full max-w-xs"
//           />
//         </div>
//         <footer className="w-full h-[82px]  mt-[30px] border flex justify-end gap-10 items-center rounded-b-[20px]">
//           <button>butsah</button>
//           <button className="bg-black text-white w-[100px] h-[40px] p-[10px] rounded-[10px] flex items-center justify-center mr-[20px]">
//             uusgeh
//           </button>
//         </footer>
//       </div>
//       <div className="w-[550px] h-[450px] border rounded-[20px]  ">
//         <header className="w-full h-[60px] border flex rounded-t-[20px]">
//           <button className="ml-[20px] mt-[10px]">X</button>
//           <h1 className="ml-[190px] mt-[20px]">Baraa zasah</h1>
//         </header>
//         <div className="flex justify-center flex-col items-center gap-3">
//           <h1>baraanii ner</h1>
//           <input
//             type="text"
//             placeholder="Type here"
//             className="input input-bordered w-full max-w-xs"
//           />
//           <h1>baraanii angilal</h1>
//           <select className="select select-bordered w-full max-w-xs">
//             <option disabled selected>
//               Angilal
//             </option>
//             <option>tsamts</option>
//             <option>umd</option>
//             <option>gaduur huvtsas</option>
//             <option>gutal</option>
//           </select>
//           <h1>une</h1>
//           <input
//             type="text"
//             placeholder="0000000$"
//             className="input input-bordered w-full max-w-xs"
//           />
//         </div>
//         <footer className="w-full h-[82px]  mt-[30px] border flex justify-end gap-10 items-center rounded-b-[20px]">
//           <button>butsah</button>
//           <button className="bg-black text-white w-[100px] h-[40px] p-[10px] rounded-[10px] flex items-center justify-center mr-[20px]">
//             zasah
//           </button>
//         </footer>
//       </div>
//       <ProductCard />
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { ProductCard } from "@/components/Card";

export default function Home() {
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [products, setProducts] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setProductName("");
    setProductType("");
    setProductPrice("");
    setIsFormVisible(false);
    setEditIndex(null);
  };

  const handleAddProduct = () => {
    if (!productName || !productType || !productPrice) {
      setMessage("Please fill in all fields.");
      return;
    }

    const newProduct = {
      name: productName,
      type: productType,
      price: productPrice,
    };

    if (editIndex !== null) {
      const updatedProducts = products.map((item, index) =>
        index === editIndex ? newProduct : item
      );
      setProducts(updatedProducts);
      setMessage("Product updated successfully!");
    } else {
      setProducts([...products, newProduct]);
      setMessage("Product added successfully!");
    }

    resetForm();
  };

  const handleEditProduct = (index) => {
    const productToEdit = products[index];
    setProductName(productToEdit.name);
    setProductType(productToEdit.type);
    setProductPrice(productToEdit.price);
    setEditIndex(index);
    setIsFormVisible(true);
  };

  const handleDeleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <div className="container m-auto flex items-center justify-center flex-col rounded-[20px]">
      <div className="pt-[30px]">
        <button
          className="border p-[15px] bg-green-500 rounded-[10px]"
          onClick={() => setIsFormVisible(true)}
        >
          Baraa uusgeh
        </button>
      </div>

      {isFormVisible && (
        <div className="w-[550px] h-fit border rounded-[20px] mt-5">
          <header className="w-full h-[60px] border flex rounded-t-[20px]">
            <button className="ml-[20px] mt-[10px]" onClick={resetForm}>
              X
            </button>
            <h1 className="ml-[190px] mt-[20px]">
              {editIndex !== null ? "Edit" : "Baraa uusgeh"}
            </h1>
          </header>
          <div className="flex justify-center flex-col items-center gap-3">
            <h1>baraanii ner</h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <h1>baraanii angilal</h1>
            <select
              className="select select-bordered w-full max-w-xs"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            >
              <option disabled selected>
                Angilal
              </option>
              <option>tsamts</option>
              <option>umd</option>
              <option>gaduur huvtsas</option>
              <option>gutal</option>
            </select>
            <h1>une</h1>
            <input
              type="text"
              placeholder="0000000$"
              className="input input-bordered w-full max-w-xs"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
          {message && <p className="text-red-500">{message}</p>}{" "}
          <footer className="w-full h-[82px] mt-[30px] border flex justify-end gap-10 items-center rounded-b-[20px]">
            <button className="border" onClick={resetForm}>
              Butsah
            </button>
            <button
              className="bg-black text-white w-[100px] h-[40px] p-[10px] rounded-[10px] flex items-center justify-center mr-[20px]"
              onClick={handleAddProduct}
            >
              {editIndex !== null ? "Zasah" : "Uusgeh"}
            </button>
          </footer>
        </div>
      )}

      <div className="flex flex-wrap gap-4 mt-5">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            item={item}
            onEdit={() => handleEditProduct(index)}
            onDelete={() => handleDeleteProduct(index)}
          />
        ))}
      </div>
    </div>
  );
}
