import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/HomePage";
import PageWrapper from "../components/layout/PageWrapper";
import Sell from "../pages/Sell/sell";
import Auctions from "../pages/Auctions/auctions";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/auctions" element={<Auctions />} />

          <Route path="/sell" element={<Sell />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
