import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/mainpage/menu";
import Main from "./components/mainpage/main";
import Result from "./components/recommend/result";
import Type from "./components/recommend/type";
import Search from "./components/recommend/search";
import Hashtag from "./components/recommend/hashtag";
import Contact from "./components/mainpage/contact";
import Detail from "./components/recommend/detail";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/type" element={<Type />}></Route>
          <Route path="/hashtag" element={<Hashtag />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/result" element={<Result />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
