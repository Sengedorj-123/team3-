// import { EditIcon } from "./icons/Edit";
// import { TrashIcon } from "./icons/Trash";

// export const ProductCard = ({ item }) => {
//   return (
//     <div className="w-[300px] h-fit border flex flex-col">
//       <header className="w-full flex justify-between">
//         <h1>baraanii ner:{item?.name}</h1>
//         <div className="flex gap-5">
//           <button>
//             <TrashIcon />
//           </button>
//           <button>
//             <EditIcon />
//           </button>
//         </div>
//       </header>
//       <h1>baraanii angilal:{item?.type}</h1>
//       <h1>Une:{item?.price}</h1>
//     </div>
//   );
// };
import { EditIcon } from "./icons/Edit";
import { TrashIcon } from "./icons/Trash";

export const ProductCard = ({ item }) => {
  return (
    <div className="w-[300px] h-fit border flex flex-col p-4">
      <header className="w-full flex justify-between">
        <h1>baraanii ner: {item?.name}</h1>
        <div className="flex gap-5">
          <button>
            <TrashIcon />
          </button>
          <button>
            <EditIcon />
          </button>
        </div>
      </header>
      <h1>baraanii angilal: {item?.type}</h1>
      <h1>Une: {item?.price}</h1>
    </div>
  );
};
