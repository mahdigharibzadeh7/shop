//Header & Footer
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="mx-52">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
