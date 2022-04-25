import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Component/Header';
import Banner from './Component/Banner';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="" element={
              <>
                <div className="App">
                  <Header />
                  <Banner />
                </div>

              </>
            }>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
