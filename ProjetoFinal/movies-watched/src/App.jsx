import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className='container-app'>
        <div className='navbar-app'>
          <Navbar />
        </div>
        <div className='link-app'>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
