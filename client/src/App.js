import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomBar from "./components/BottomBar";
import MainPage from "./pages/MainPage";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BottomBar />}>
          <Route index element={<MainPage />} />
          <Route path="page1" element={<MainPage />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
          <Route path="page4" element={<Page4 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
