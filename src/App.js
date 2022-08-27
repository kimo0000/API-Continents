import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Logo from './components/Logo.js';
import Navigation from './components/Navigation.js';

function App() {
  return (
    <BrowserRouter>
      <Logo />
      <Navigation />
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/About' element={<About />} />
         <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
