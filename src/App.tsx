import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/js/all";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import List from "./components/section/list";
import FestivalDetail from "./components/section/festival_detail/festival_detail";
import Login from "./components/header/login";
import Mypage from "./components/section/mypage/mypage";
import Search from "./components/section/search/search";
import Main from "./pages/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/list" component={<List />} />
          <Route path="/details">
            <FestivalDetail />
          </Route>
          <Route path="/mypage">
            <Mypage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/searchlist">
            <Search />
          </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
