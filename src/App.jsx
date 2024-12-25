// import { useState } from "react";
// import Hello from "./components/Hello";
// import Fruits from "./components/Fruits";
// import reactLogo from "./assets/react.svg";

import "./App.css";
import NavBar from "./components/Navbar";
import RouteConfig from "./components/RouteConfig";

// function App() {
//   const [count, setCount] = useState(0);

//   console.log("hello world");

//   const increment = (val) => {
//     setCount((c) => {
//       c + 1 + val;
//     });
//   };

//   const fruits = [
//     {
//       id: "1",
//       name: "Apple",
//     },
//     {
//       id: "2",
//       name: "Mango",
//     },
//     {
//       id: "3",
//       name: "Banana",
//     },
//   ];

//   const myElement = (
//     <>
//       <Hello
//         name="Abhi"
//         array={[4, 5, 7]}
//         message="You will get job within next month"
//       />
//       <ul>
//         <li onClick={() => increment(2)}>Banana {count} </li>
//         <li onClick={() => increment(4)}>Apple {count} </li>
//         <li onClick={() => increment(6)}>Mango {count} </li>
//       </ul>
//       <Fruits fruits={fruits}></Fruits>
//     </>
//   );

//   var value = 5;

//   value = 10;

//   return myElement;
// }

function App() {
  return (
    <>
      {/* <NavBar pagelist={pageList} /> */}
      <RouteConfig />
    </>
  );
}

export default App;
