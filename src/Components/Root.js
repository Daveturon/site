import Header from "./Header.js";
import Footer from "./Footer.js";
import { Outlet } from "react-router-dom";

function Root() {
  return(
    <>
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </>
  );
}

export default Root;
