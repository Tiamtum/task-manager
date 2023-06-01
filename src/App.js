import { Route, Routes } from "react-router-dom";
import MyNavbar from "./components/Navbar/Navbar.component";
import LandingPage from "./components/LandingPage/LandingPage.component";
import List from "./components/List/List.component";
import AddItem from "./components/List/AddItem/AddItem.component"
import AboutPage from "./components/AboutPage/AboutPage.component";
import ErrorPage from "./components/ErrorPage/ErrorPage.component";
import DetailedListItem from "./components/List/ListItem/DetailedListItem/DetailedListItem.component";

//<Route path="/parent" element={<parentLayout />}
//  Route index element={<firstRoute /}
//  Route path=".." element={<secondRoute /}
//  Route path=".." element={<thirdRoute /}

export default function App() {
  return (
    <>
    <MyNavbar brandText={"Task Manager"} buttonText={"About"} />
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/list" element={ <List />} />
          <Route path="/list/add" element={ <AddItem />} />
          <Route path="/list/:id" element={ <DetailedListItem />} />
        <Route />
        <Route path="/about" element={ <AboutPage />} />
        <Route path="*" element={ <ErrorPage /> } />
    </Routes>
    </>
  );
}