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
import Loader from "./Component/Loader";

function App() {
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        //console.log("scrolling up");
      } else if (y < window.scrollY) {
        //console.log("scrolling down");
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

  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   console.log(scrollPosition)
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const dispatch = useDispatch();
  const inforLogin = useSelector((state) => state.SignInReducer);
  // useEffect(() => {
  //   // window.addEventListener("beforeunload", function (e) {
  //   //   e.preventDefault()
  //   //   dispatch(LogoutAction())
  //   // });
  //   if(window.close)
  //   {
  //     dispatch(LogoutAction())
  //   }
  //   // window.onbeforeunload = () => dispatch(LogoutAction())
  // }, [])

  useEffect(() => {
    sessionStorage.setItem("scrollY", y)
  })

  let keywork = useSelector((state) => state.getIndexReducer).index;
  const [accessLogin, setAccessLogin] = useState(true);

  let id = useSelector((state) => state.getIndexReducer).index;


  const [load, setLoad] = useState(0)

  // change load 
  useEffect(() => {
    setTimeout(() => {
      setLoad(1)
    }, 3000)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        {
          load === 0 ? (
            <>
                <Route
                path="*"
                element={
                    <Loader />
                }
              ></Route>
              {/* <Route
            path="/Home/"
            element={
              <Loader />
            }
          ></Route>
  
          <Route
            path="/SignIn/"
            element={
              <Loader />
            }
          ></Route>
  
          <Route
            path="/SignUp/"
            element={
              <Loader />
            }
          ></Route> */}
            </>

          ) : (
            
          <><Route
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
            path={`/Detail`}
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
            path={`/search`}
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
          ></Route></>)
      }
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// accessLogin ? <Home />
// :
// <Navigate to="/SignIn/" />
