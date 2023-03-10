import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/js/all";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import List from "./components/section/list";
import FestivalDetail from "./pages/Festival/FestivalDetail";
import Mypage from "./components/section/mypage/mypage";
import Search from "./components/section/search/search";
import Main from "./pages/Main";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/details/:id" element={<FestivalDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/list" element={<List />} />
        <Route path="/searchlist" element={<Search />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
