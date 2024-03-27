// import { FaStar as FullStar } from "react-icons/fa";
// import { FaStarHalfAlt as HalfStar } from "react-icons/fa";

// function renderStars(stars: number) {
//   const starIcons = [];
//   const fullStars = Math.floor(stars);
//   const hasHalfStar = stars % 1 !== 0;

//   for (let i = 0; i < fullStars; i++) {
//     starIcons.push(
//       <i>
//         <FullStar size={17} className="text-yellow-400" />
//       </i>
//     );
//   }

//   if (hasHalfStar) {
//     starIcons.push(
//       <i>
//         <HalfStar size={17} className="text-yellow-400" />
//       </i>
//     );
//   }

//   return starIcons;
// }