import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from './components/mainpage/menu';
import Main from './components/mainpage/main';
import Result from './components/recommend/result';
import Type from './components/recommend/type';
import Search from './components/recommend/search';
import Hashtag from './components/recommend/hashtag';
import Restaurant from './components/recommend/restaurant';

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/result" element={<Result/>}></Route>
          <Route path="/type" element={<Type />}></Route>
          <Route path="/hashtag" element={<Hashtag />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/restaurant" element={<Restaurant />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
