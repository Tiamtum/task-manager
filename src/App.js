import { Route, Routes } from "react-router-dom";
import MyNavbar from "./components/Navbar/Navbar.component";
import List from "./components/List/List.component";
import ListItem from "./components/List/ListItem/ListItem.component"
import AddItem from "./components/List/AddItem/AddItem.component"
import AboutPage from "./components/AboutPage/AboutPage.component";
import ErrorPage from "./components/ErrorPage/ErrorPage.component";

//<Route path="/parent" element={<parentLayout />}
//  Route index element={<firstRoute /}
//  Route path=".." element={<secondRoute /}
//  Route path=".." element={<thirdRoute /}

export default function App() {
  
  return (
    <>
    <MyNavbar brandText={"Task Manager"} buttonText={"About"} />
    <Routes>
        <Route path="/" element={<List />}/>
          <Route path="/list/add" element={<AddItem />}/>
          <Route path="/list/view" element={<ListItem />}/>
        <Route />
        <Route path="/about" element={<AboutPage />}/>
        <Route path="*" element={<ErrorPage />}/>
    </Routes>
    </>
  );
}