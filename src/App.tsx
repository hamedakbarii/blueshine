import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useWindowScroll } from "@mantine/hooks";
import { MdKeyboardArrowUp } from "react-icons/md";

function App() {
  const router = useRoutes(routes);
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <div className="relative">
        <Navbar />
        {router}
        <Footer />

        {scroll.y > 0 ? (
          <div
            onClick={() => scrollTo({ y: 0 })}
            className="fixed right-10 bottom-10 bg-secondaryColor text-white text-4xl shadow-2xl rounded-full cursor-pointer"
          >
            <MdKeyboardArrowUp />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
