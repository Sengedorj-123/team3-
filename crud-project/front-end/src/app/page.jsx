// import { ProductCard } from "@/components/Card";

import ProductCard from "./ui/ProductCard";

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

export default function Home(){
  return (
    <ProductCard/>
  )
}




// "use client";
// import { useState } from "react";
// import { ProductCard } from "@/components/Card";

// export default function Home() {
//   const [productName, setProductName] = useState("");
//   const [productCategory, setProductCategory] = useState("");
//   const [productPrice, setProductPrice] = useState("");
//   const [products, setProducts] = useState([]);

//   const handleAddProduct = () => {
//     if (productName && productCategory && productPrice) {
//       const newProduct = {
//         name: productName,
//         type: productCategory,
//         price: productPrice,
//       };
//       setProducts([...products, newProduct]);
//       setProductName("");
//       setProductCategory("");
//       setProductPrice("");
//     }
//   };

//   return (
//     <div className="container m-auto flex items-center justify-center flex-col rounded-[20px]">
//       <div className="pt-[30px]">
//         <button className="border p-[15px] bg-green-500 rounded-[10px] ">
//           baraa uusgeh
//         </button>
//       </div>

//       {/* Add Product Form */}
//       <div className="w-[550px] h-[450px] border rounded-[20px]">
//         <header className="w-full h-[60px] border flex rounded-t-[20px]">
//           <button className="ml-[20px] mt-[10px]">X</button>
//           <h1 className="ml-[190px] mt-[20px]">Baraa uusgeh</h1>
//         </header>
//         <div className="flex justify-center flex-col items-center gap-3">
//           <h1>baraanii ner</h1>
//           <input
//             type="text"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//             placeholder="Type here"
//             className="input input-bordered w-full max-w-xs"
//           />
//           <h1>baraanii angilal</h1>
//           <select
//             value={productCategory}
//             onChange={(e) => setProductCategory(e.target.value)}
//             className="select select-bordered w-full max-w-xs"
//           >
//             <option disabled value="">
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
//             value={productPrice}
//             onChange={(e) => setProductPrice(e.target.value)}
//             placeholder="0000000$"
//             className="input input-bordered w-full max-w-xs"
//           />
//         </div>
//         <footer className="w-full h-[82px] mt-[30px] border flex justify-end gap-10 items-center rounded-b-[20px]">
//           <button
//             onClick={() => {
//               setProductName("");
//               setProductCategory("");
//               setProductPrice("");
//             }}
//           >
//             butsah
//           </button>
//           <button
//             className="bg-black text-white w-[100px] h-[40px] p-[10px] rounded-[10px] flex items-center justify-center mr-[20px]"
//             onClick={handleAddProduct}
//           >
//             uusgeh
//           </button>
//         </footer>
//       </div>

//       {/* Product Cards */}
//       <div className="flex flex-wrap gap-5 mt-5">
//         {products.map((item, index) => (
//           <ProductCard key={index} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// }
