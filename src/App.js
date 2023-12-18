import './App.css';
// import { Outlet } from 'react-router-dom';
import { useRef } from 'react';
import { Home } from './pages/home/home';
import Header from './components/header';

function App() {
  
  const resultRef = useRef(null)


  return (
    <>
    <Header resultRef={resultRef}/>
    <Home ref={resultRef}/>
    
    </>
  );
}

export default App;
