import { Outlet } from "react-router-dom";
import "../../assets/website/css/bootstrap.min.css";
import "../../assets/website/css/style.css";
import "../../assets/website/css/abc.css";
import "../../assets/website/css/resposive.css";
import Sidemenu from "../../components/website/seller/others/Sidemenu";
import Footer from "../../components/website/seller/others/Footer";
const Innerlayout = () => {
  return (
    <>
      <Sidemenu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

// Test souvik

export default Innerlayout;
