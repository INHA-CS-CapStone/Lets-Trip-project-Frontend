import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from './components/mainpage/menu';
import Result from './components/recommend/result';
import Type from './components/recommend/type';
import Search from './components/recommend/search';
import Hashtag from './components/recommend/hashtag';

function Router() {

  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}></Route>
          <Route path="/result" element={<Result/>}></Route>
          <Route path="/type" element={<Type />}></Route>
          <Route path="/hashtag" element={<Hashtag />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;