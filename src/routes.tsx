import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import TermsOfCondition from "./pages/TermsOfCondition";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/termsofcondition", element: <TermsOfCondition /> },
  { path: "/*", element: <Notfound /> },
];

export default routes;
