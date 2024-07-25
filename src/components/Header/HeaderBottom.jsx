import { IoMenu } from "react-icons/io5";

const HeaderBottom = () => {
  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-white ">
      <ul className="flex items-center gap-5 text-sm tracking-wider ">
        <li className="flex items-center gap-1 pt-1">
          <IoMenu /> All
        </li>
        <li className="pt-1">Today's Deal</li>
        <li className="pt-1">Customer Service</li>
        <li className="pt-1">Registry</li>
        <li className="pt-1">Gift Card</li>
        <li className="pt-1">Sell</li>
      </ul>
    </div>
  );
};

export default HeaderBottom;
































// import { IoMenu } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const HeaderBottom = () => {
//   const categories = [
//     "Today's Deal",
//     "Customer Service",
//     "Registry",
//     "Gift Card",
//     "Sell",
//   ];

//   return (
//     <div className="w-full px-4 h-[36px] bg-amazon_light text-white">
//       <ul className="flex items-center gap-5 text-sm tracking-wider">
//         <li className="flex items-center gap-1 pt-1">
//           <IoMenu /> All
//         </li>
//         {categories.map((category, index) => (
//           <li key={index} className="pt-1">
//             <Link to={`/category/${encodeURIComponent(category)}`}>
//               {category}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HeaderBottom;


































// import { IoMenu } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const HeaderBottom = () => {
//   const categories = [
//     "Today's Deal",
//     "Customer Service",
//     "Registry",
//     "Gift Card",
//     "Sell",
//   ];

//   return (
//     <div className="w-full px-4 h-[36px] bg-amazon_light text-white">
//       <ul className="flex items-center gap-5 text-sm tracking-wider">
//         <li className="flex items-center gap-1 pt-1">
//           <IoMenu /> All
//         </li>
//         {/* Categories */}
//         {categories.map((category, index) => (
//           <li
//             key={index}
//             className="hidden md:block pt-1" // Hide on mobile screens
//           >
//             <Link to={`/category/${encodeURIComponent(category)}`}>
//               {category}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HeaderBottom;































