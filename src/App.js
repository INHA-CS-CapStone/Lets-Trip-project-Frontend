import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from './components/menu';
import Main from './components/main';
import Map from './components/recommend/map';
import Input from './components/recommend/input';
import Result from './components/recommend/result';
import Type from './components/recommend/type';
import Hashtag from './components/recommend/hashtag';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/input" element={<Input />}></Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/result" element={<Result/>}></Route>
          <Route path="/type" element={<Type />}></Route>
          <Route path="/hashtag" element={<Hashtag />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
