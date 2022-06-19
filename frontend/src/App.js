import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./Pages/Home";
import SignUp_Page from "./Pages/SignUp_Page";
import SignIn_Page from "./Pages/SignIn_Page";
import { useEffect, useState, useCallback } from "react";
import Detail_Page from "./Pages/Detail_Page";
import { useSelector, useDispatch } from "react-redux";
import Cart_Page from "./Pages/Cart_Page";
import AccountDetail_Page from "./Pages/AccountDetail_Page";
import Address_Page from "./Pages/Address_Page";
import ManageProducts_Pages from "./Pages/ManageProducts_Pages";
import SignInReducer from "./Reducer/SignInReducer";
import Search1 from "./Pages/Search_page";
import { SignInAction, LogoutAction } from "../src/Action/SignInAction";
import History_page from "./Pages/History_page";

function App() {
  // const [y, setY] = useState(window.scrollY);

  // const handleNavigation = useCallback(
  //   e => {
  //     const window = e.currentTarget;
  //     if (y > window.scrollY) {
  //       console.log("scrolling up");
  //     } else if (y < window.scrollY) {
  //       console.log("scrolling down");
  //     }
  //     setY(window.scrollY);
  //   }, [y]
  // );

  // useEffect(() => {
  //   setY(window.scrollY);
  //   window.addEventListener("scroll", handleNavigation);

  //   return () => {
  //     window.removeEventListener("scroll", handleNavigation);
  //   };
  // }, [handleNavigation]);
  const dispatch = useDispatch();
  const inforLogin = useSelector((state) => state.SignInReducer);
  // useEffect(() => {
  //   window.addEventListener("beforeunload", function (e) {
  //     dispatch(LogoutAction())
  //   });
  // })

  let keywork = useSelector((state) => state.getIndexReducer).index;
  const [accessLogin, setAccessLogin] = useState(true);

  let id = useSelector((state) => state.getIndexReducer).index;


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            inforLogin.access === 1 && inforLogin.isAdmin === 0 ? (
              <Home />
            ) : (
              <Navigate to="/SignIn/" />
            )
          }
        ></Route>

        <Route
          path="/Home/"
          element={
            inforLogin.access === 1 && inforLogin.isAdmin === 0 ? (
              <Home />
            ) : (
              <Navigate to="/SignIn/" />
            )
          }
        ></Route>

        <Route
          path="/SignIn/"
          element={
            inforLogin.access === 1 && inforLogin.isAdmin === 0 ? (
              <Navigate to="/Home/" />
            ) : (
              <SignIn_Page />
            )
          }
        ></Route>

        <Route
          path="/SignUp/"
          element={
            inforLogin.access === 1 && inforLogin.isAdmin === 0 ? (
              <Navigate to="/Home/" />
            ) : (
              <SignUp_Page />
            )
          }
        ></Route>

        <Route
          path={`/Detail/${id}`}
          element={
            inforLogin.access === 1 && inforLogin.isAdmin === 0 ? (
              <Detail_Page />
            ) : (
              <SignIn_Page />
            )
          }
        ></Route>

        <Route
          path={`/ViewCart/`}
          element={
            inforLogin.access === 1 && inforLogin.isAdmin === 0 ? (
              <Cart_Page />
            ) : (
              <SignIn_Page />
            )
          }
        ></Route>

        <Route
          path={`/my-account/AccountDetail`}
          element={
            inforLogin.access === 1 && inforLogin.isAdmin === 0 ? (
              <AccountDetail_Page />
            ) : (
              <SignIn_Page />
            )
          }
        ></Route>

        <Route
          path={`/my-account/Address/`}
          element={
            inforLogin.access === 1 && inforLogin.isAdmin === 0 ? (
              <Address_Page />
            ) : (
              <SignIn_Page />
            )
          }
        ></Route>

        <Route
          path={`/admin/manage-products`}
          element={
            
              // if(inforLogin.access === 1)
              // {
              //     if(inforLogin.isAdmin === 1)
              //     {
              //       <ManageProducts_Pages />
              //     }
              //     else 
              //     {
              //       <Home />
              //     }
              // }
              // else 
              // {
              //       <SignIn_Page />
              // }
              
            
            inforLogin.access === 1 && inforLogin.isAdmin === 1 ? (
              <ManageProducts_Pages />
            ) : (
              <SignIn_Page />
            )
          }
        ></Route>

        <Route
          path={`/search/${keywork}`}
          element={
            inforLogin.access === 1 && inforLogin.isAdmin === 0 ? (
              <Search1 />
            ) : (
              <SignIn_Page />
            )
          }
        ></Route>
        <Route
          path={`/History`}
          element={
            inforLogin.access === 1 && inforLogin.isAdmin === 0 ? (
              <History_page />
            ) : (
              <SignIn_Page />
            )
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// accessLogin ? <Home />
// :
// <Navigate to="/SignIn/" />
