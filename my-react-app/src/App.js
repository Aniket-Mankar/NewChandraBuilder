import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ChandraHomePage from './Components/ChandraHomePage';
import BuilderInsidePage from './Components/BuilderInsidePage';
import Header from './Components/Header';
import BraceletPage from './Components/BraceletPage';
import ShowImagesData from './Components/ShowImagesData';
import RingPage from './Components/RingPage'

import './App.css';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<ChandraHomePage />} />
      <Route exact path='/BuilderInsidePage' element={<BuilderInsidePage />} />
      <Route exact path='/BraceletPage' element={<BraceletPage />} />
    </Routes>
  </Router>
);

export default App;
