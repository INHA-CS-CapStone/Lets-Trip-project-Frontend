import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from './components/mainpage/menu';
import Main from './components/mainpage/main';
import Input from './components/recommend/input';
import Result from './components/recommend/result';
import Type from './components/recommend/type';
import Hashtag from './components/recommend/hashtag';
import Mypage from './components/mainpage/mypage';
import Community from './components/mainpage/community';

function Router() {

  return (
    <div>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route path="/input" element={<Input />}></Route>
          <Route path="/result" element={<Result/>}></Route>
          <Route path="/type" element={<Type />}></Route>
          <Route path="/hashtag" element={<Hashtag />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;