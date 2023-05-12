import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import SubmitCollectionpage from './pages/SubmitCollectionPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';





function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/dashboard" element={<DashboardPage/>}></Route>
    <Route path="/submit-collection" element={<SubmitCollectionpage/>}></Route>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/register" element={<RegisterPage/>}></Route>
  </Routes>
  </BrowserRouter>
}

export default App;
