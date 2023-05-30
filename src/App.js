import {Route,Routes, useLocation} from "react-router-dom";
import {useState, useEffect} from "react";

import Navbar from "./components/Navbar/Narbar.component";
import Root from './routes/root.component';
import LoginPage from "./routes/login/login-page.component"
import RegisterPage from "./routes/register/register-page.component";
import AboutPage from "./routes/about/about-page.component";
import DashBoardPage from "./routes/dashboard/dashboard-page.component";

import ErrorPage from "./routes/error-page.component";

import './App.css';

//https://www.youtube.com/watch?v=Ul3y1LXxzdU
//useParams for dynamic routes like ../:id
//nested routes, can take advantage of 'layout' components:
//<Route path="/parent" element={<parentLayout />}
//  Route index element={<firstRoute /}
//  Route path=".." element={<secondRoute /}
//  Route path=".." element={<thirdRoute /}
//</Route>
//Need <Outlet /> within the 1st/2nd/3rd/etc. ; useOutletContext to share data between them
//location = useLocation();
//<Link ... state={} />


function App() {
  
  const [brandText, setBrandText] = useState("Task Manager");
  const [buttonText, setButtonText] = useState("About");
  
  return (
    <> 
    <Navbar brandText={brandText} buttonText={buttonText}/>
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/dashboard" element={<DashBoardPage />}/>

      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </>
  );
}

export default App;
