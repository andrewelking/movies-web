import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import MovieRoutes from './config/MovieRoutes';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<MovieRoutes />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
