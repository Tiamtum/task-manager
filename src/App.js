import { Route, Routes } from "react-router-dom";
import MyNavbar from "./components/Navbar/Navbar.component";
import List from "./components/List/List.component";
import AboutPage from "./components/AboutPage/AboutPage.component";
import ErrorPage from "./components/ErrorPage/ErrorPage.component";

export default function App() {
  
  return (
    <>
    <MyNavbar brandText={"Task Manager"} buttonText={"About"} />
    <Routes>
        <Route path="/" element={<List />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="*" element={<ErrorPage />}/>
    </Routes>
    </>
  );
}