import MyApp from "./components/MyApp";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import NavBarCom from "./components/layouts/NavBarCom";
import Data from "./Data";

function App() {
  return (
    <>
      <Header />
      <NavBarCom />
      <MyApp cards={Data().cards} title={Data().title} />
      <Footer />
    </>
  );
}

export default App;
