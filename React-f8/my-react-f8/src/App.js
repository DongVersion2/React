import "./App.css";
import Content from "./hook/useContext/Content";
import {
  useContext,
  useEffect,
  useRef,
  useState,
  memo,
  useCallback,
  useMemo,
  useReducer
} from "react";
import { ThemeContext } from "./hook/useContext/ThemeContext";
import ContentEffect from "./hook/useEffect/Content";
import Content2 from "./hook/useEffect/Content2";
import Content3 from "./hook/useEffect/Content3";
import Content4 from "./hook/useEffect/Content4";
import ContentMemo from "./hook/useCallback/ContentReactMemo";

//PHẦN useReducer
// 1. init state
// 2. action: up (state + 1) / down (state 0- 1)
// 3. reducer
// 4. dispatch

//init state
const initState = 0
//action
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'
//reducer
const reducer = (state, action) => {
  console.log('reducer running');
  switch(action) {
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state -1
    default:
      throw new Error('invalid action')
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initState)

  return (
    <div style={{ padding: "0 20px" }}>
      <h1>{count}</h1>
      <button 
      onClick={() => dispatch(DOWN_ACTION)}
      >
      Down
      </button>
      <button 
      onClick={() => dispatch(UP_ACTION)}
      >
      Up
      </button>
    </div>
  );
}
export default App;

// // PHẦN useMemo
// function App() {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [products, setProducts] = useState([]);
//   const nameRef = useRef();

//   const handleSubmit = () => {
//     setProducts([
//       ...products,
//       {
//         name,
//         price: +price,//price là kiểu "tring"
//       },
//     ]);
//     setName('')
//     setPrice('')

//     nameRef.current.focus();
//   };

//   // const total = products.reduce((result, prod) => result + prod.price, 0);
//   const total = useMemo (() => {
//     const result = products.reduce((result, prod) => {
//       console.log('tính toán lại.............');
//       return result + prod.price;
//     }, 0)
//     return result;
//   }, [products])
//   console.log(products);

//   return (
//     <div style={{ padding: "10px 32px" }}>
//       <input
//       ref={nameRef}
//         value={name}
//         placeholder="Enter name..."
//         onChange={(e) => setName(e.target.value)}
//       />
//       <br />
//       <input
//         price={price}
//         placeholder="Enter price..."
//         onChange={(e) => setPrice(e.target.value)}
//       />
//       <br />
//       <button onClick={handleSubmit}>Add</button>
//       <br />
//       <p>Total : {total} </p>
//       <ul>
//         {products.map((product, index) => (
//           <li key={index}>
//             {product.name} - {product.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// PHẦN meno và useCallback
//memo không phải là 1 hook
// function App() {
//   const [count, setCount] = useState(0)

//   const handleIncrease = useCallback(() => {
//     // setCount(count + 1)
//     setCount(preCount => preCount + 1)
//   }, [])

//   return(
//     <div style={{padding: '10px 32px'}}>
//         <ContentMemo onIncrease = {handleIncrease} />
//         <h1>{count}</h1>
//     </div>
//   );
// }
// export default App;

// PHẦN VỀ Ref
//để lưu các giá trị qua một tham chiếu bên ngoài function component
// function App() {
//   const [count, setCount] = useState(10)
//   // const ref = useRef(99)
//   // console.log(ref.current);

//   //hoặc dùng let, mục đích để gán lại đc value
//   const timeId = useRef()
//   const preCount = useRef()

//   //mặc định useEffect sẽ được gọi 1 lần khi mouted
//   useEffect (() => {
//     preCount.current = count
//   }, [count]);//khi biến count thay đổi thì sẽ gọi lại callback

//   // cách lấy ra Element, kiểu như getElementId
//   const h1Ref = useRef()
//   useEffect (() => {
//     console.log(h1Ref.current);//output <h1>10</h1>
//   })

//   const handleStart = () => {
//     timeId.current = setInterval(() => {
//       // ref.current = Math.random()
//       setCount(prevCount => prevCount - 1)
//     }, 1000)
//     console.log('start  ', timeId.current);
//   }

//   const handleStop = () => {
//     clearInterval(timeId.current);
//     console.log('stop ', timeId.current);
//   }

//   return (
//     <div style={{padding: 20}}>
//       <h1 ref={h1Ref}>{count}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//       <p>{preCount.current}</p>
//     </div>
//   )
// }
// export default App;

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
// function App() {
// const [show, setShow]  = useState(false);

//   return(
//     <>
//     <h1 onClick = {() => setShow(!show) } >Tonggle</h1>
//     {show && <Content2 />}
//     </>
//   );
// }
// export default App;

//phần effect ví dụ về avatar
// function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <h1 onClick={() => setShow(!show)}>Tonggle</h1>
//       {show && <Content3 />}
//     </>
//   );
// }
// export default App;

//phần effect, ví dụ về ứng dụng chat
// function App() {
//   const [show, setShow] = useState(false);

//   return (
//     <>
//       <h1 onClick={() => setShow(!show)}>Tonggle</h1>
//       {show && <Content4 />}
//     </>
//   );
// }
// export default App;

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
