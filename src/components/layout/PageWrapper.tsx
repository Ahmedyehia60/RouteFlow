import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function PageWrapper() {
  return (
    <div>
      <Navbar />

      <main className="grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default PageWrapper;
