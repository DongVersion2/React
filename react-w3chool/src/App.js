import "./App.css";
import NewComponent from "./LogIn";
import "./app/css/style.css";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import ReactDOM from "react-dom/client";
import FavoriteColor from "./hook/UseState";
import Counter from "./hook/UseEffect"
import { Component1, Component2, Component3, Component4, Component5 } from './hook/UseContext';
import Apps from "./hook/UseRef";
import { Todos } from "./hook/UseReducer";
import Appss from "./hook/UseCallback";
import Appssss from "./hook/UseMemo";
import Homes from "./hook/CustomHook";

function App() {
  return (
    <>
      <div className="App"></div>
      
      {/* phần routes */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

      {/* phần usestate */}
      {/* <FavoriteColor /> */}

      {/* phần useEffect */}
      <Counter />

      {/* phần usecontext */}
      {/* <Component1 /> */}

      {/* phần useRef */}
        {/* <Apps /> */}

      {/* phần useReducer */}
      {/* <Todos /> */}

      {/* phần useCallback */}
      {/* <Appss /> */}

      {/* phần useMemo */}
      {/* <Appssss /> */}

      {/* phần custom hook */}
      {/* <Homes /> */}

      {/* phần chèn NewComponent */}
      {/* <NewComponent title="Log in" /> */}
    </>
  );
}

export default App;
