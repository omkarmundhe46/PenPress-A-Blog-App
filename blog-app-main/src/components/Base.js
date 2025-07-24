import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Base = ({ title = "Welcome to our website", children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <CustomNavbar />
      <main className="flex-grow-1">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Base;
