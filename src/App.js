
import { Route, Routes } from "react-router-dom";
import MyNavbar from "./components/Navbar/Navbar.component";
import LandingPage from "./components/LandingPage/LandingPage.component";
import List from "./components/List/List.component";
import AddItem from "./components/List/AddItem/AddItem.component"
import AboutPage from "./components/AboutPage/AboutPage.component";
import ErrorPage from "./components/ErrorPage/ErrorPage.component";

export default function App() {  
  
  console.log("App render");

  return (
    <>
    <MyNavbar brandText={"Task Manager"} buttonText={"About"} />
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/list" element={ <List />} />
          <Route path="/list/add" element={ <AddItem />} />
        <Route />
        <Route path="/about" element={ <AboutPage />} />
        <Route path="*" element={ <ErrorPage /> } />
    </Routes>
    </>
  );
}