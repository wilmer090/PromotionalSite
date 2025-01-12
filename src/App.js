import './App.css';
import Footer from './components/common/Footer/Footer';
import Nav from './components/common/Nav/Nav';
import { NAV_LOGO_WHITE, ROUTE } from './constant/constant';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { PageRoutes } from './constant/ROUTES';

function App() {  
  return (
    <div className="app">
        <Router>
          <Nav items={ROUTE} logo={NAV_LOGO_WHITE}/>
          <Routes>
            {PageRoutes.map((route) =>{
              return  <Route key={route.id} path={route.path} element={route.element} />
            })}
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
