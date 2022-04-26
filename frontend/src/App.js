import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Pages/Home';
import SignUp_Page from './Pages/SignUp_Page';
import SignIn_Page from './Pages/SignIn_Page';
import { useEffect, useState, useCallback } from 'react';

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

  return (
    <BrowserRouter>
        <Routes>

            <Route path=""
                   element={
                    <Home />
                  }>
            </Route>

            <Route path="/Home/"
                   element={
                    <Home />
                  }>
            </Route>

            <Route path="/SignIn/"
                   element={
                    <SignIn_Page />
                  }>
            </Route>

            <Route path="/SignUp/"
                   element={
                    <SignUp_Page />
                  }>
            </Route>


        </Routes>
    </BrowserRouter>
  );
}

export default App;
