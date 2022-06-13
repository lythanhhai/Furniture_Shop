import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Pages/Home';
import SignUp_Page from './Pages/SignUp_Page';
import SignIn_Page from './Pages/SignIn_Page';
import { useEffect, useState, useCallback } from 'react';
import Detail_Page from './Pages/Detail_Page';
import { useSelector } from 'react-redux';
import Cart_Page from './Pages/Cart_Page';
import AccountDetail_Page from './Pages/AccountDetail_Page';
import Address_Page from './Pages/Address_Page';
import ManageProducts_Pages from './Pages/ManageProducts_Pages';

function App() {

  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        console.log("scrolling up");
      } else if (y < window.scrollY) {
        console.log("scrolling down");
      }
      setY(window.scrollY);
    }, [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);
  
  let id = useSelector(state => state.getIndexReducer).index
  const [accessLogin, setAccessLogin] = useState(true)

  useEffect(
    () => {
      localStorage.setItem("accessToken", accessLogin)
    }, [accessLogin]
  )

  const [isAdmin, setIsAdmin] = useState(false)
  localStorage.setItem("isAdmin", isAdmin)

  const Login = () => {
    setAccessLogin(true)
  }

  const Logout = () => {
    setAccessLogin(false)
  }

  return (
    <BrowserRouter>
        <Routes>

            <Route path=""
                   element={
                    (localStorage.getItem("accessToken") === 'true') ? (<Home />)  : (<SignIn_Page />)
                  }>
            </Route>

            <Route path="/Home/"
                   element={
                    (localStorage.getItem("accessToken") === 'true') ? (<Home />) : (<SignIn_Page />)
                  }>
            </Route>

            <Route path="/SignIn/"
                   element={
                    (localStorage.getItem("accessToken") === 'true') ? (<Navigate to="/Home/" />) : (<SignIn_Page />)
                  }>   
            </Route>

            <Route path="/SignUp/"
                   element={
                    (localStorage.getItem("accessToken") === 'true') ? (<Navigate to="/Home/" />) : (<SignUp_Page />)
                  }>
            </Route>

            <Route path={`/Detail/${id}`}
                   element={
                    (localStorage.getItem("accessToken") === 'true') ? (<Detail_Page />) : (<SignIn_Page />)
                  }>
            </Route>

            <Route path={`/ViewCart/`}
                   element={
                    (localStorage.getItem("accessToken") === 'true') ? (<Cart_Page />) : (<SignIn_Page />)
                  }>
            </Route>

            <Route path={`/my-account/AccountDetail`}
                   element={
                    (localStorage.getItem("accessToken") === 'true') ? (<AccountDetail_Page />) : (<SignIn_Page />)
                  }>
            </Route>

            <Route path={`/my-account/Address/`}
                   element={
                    (localStorage.getItem("accessToken") === 'true') ? (<Address_Page />) : (<SignIn_Page />)
    
                  }>
            </Route>

            <Route path={`/admin/manage-products`}
                   element={
                    (localStorage.getItem("accessToken") === 'true') && (localStorage.getItem("isAdmin") === 'true') ? (<ManageProducts_Pages />) : (<SignIn_Page />)
                  }>
            </Route>

        </Routes>
    </BrowserRouter>
  );
}

export default App;

// accessLogin ? <Home />
// : 
// <Navigate to="/SignIn/" />