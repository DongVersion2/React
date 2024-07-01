import "./App.css";
import Content from "./hook/useContext/Content";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "./hook/useContext/ThemeContext";
import ContentEffect from "./hook/useEffect/Content";
import Content2 from "./hook/useEffect/Content2";

// phần mouted , unmouted
// function App() {
//   const [show, setShow]  = useState(false);

//   return(
//     <>
//     <h1 onClick = {() => setShow(!show) } >Tonggle</h1>
//     {show && <ContentEffect />} 
//     </>
//   );
// }

// export default App;

//phần effect cleanup timeout
//ví dụ đếm ngược số
function App() {
const [show, setShow]  = useState(false);

  return(
    <>
    <h1 onClick = {() => setShow(!show) } >Tonggle</h1>
    {show && <Content2 />} 
    </>
  );
}
export default App;




//phần này cho useRef
// useRef luôn trả vê 1 dạng Object
// function App() {

//   const [count, setCount] = useState(60)
//   let timeId = useRef();

//   const handleStart = () => {
//     timeId.current = setInterval(() => {
//       setCount(preCount => preCount - 1)
//     }, 1000)
//   }
//   const handleStop = () => {
//     clearInterval(timeId.current)

//   }

//   return(
//     <>
//     <div style={{ padding: 50 }}>
//       <h1>{count}</h1>
//       <button onClick={ handleStart }>Start</button>
//       <button onClick={ handleStop }>Stop</button>
//     </div>
//     </>
//   );
// }

// export default App;


// phần useContext
// function App() {
//   const context = useContext(ThemeContext);

//   return (
//     //value={theme} ở đây mục đích là các component con sẽ nhận được giá trị props theme
//       <div className="App" style={{ padding: 50 }}>
//         <button onClick={ context.tonggleTheme }>Tonggle theme</button>
//         <Content />
//       </div>
//   );
// }

// export default App;

//component a
//component b
//component c
//bình thường nếu muốn truyền dữ liệu từ a đến c(bằng props) thì cần đến component b
//sử dụng useText thì k cần vậy nữa, bỏ qua component b

// có 3 bước
// 1. create context : tạo dữ liệu
// 2. provider: nhà cung cấp, cung cấp dữ liệu, đặt ở component cha
// 3. Consumer: nhận dữ liệu, từ component cha

//provider và consumer là 2 react component
//có thể gọi vô số createContext(); khác nhau tùy ý

