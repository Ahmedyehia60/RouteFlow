import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/HomePage";
import PageWrapper from "../components/layout/PageWrapper";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageWrapper />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
