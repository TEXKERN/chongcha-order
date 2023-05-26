import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Container from './components/Container';

function App() {
  const [order, setOrder] = useState([
    { orderid: "", ordername: "" }
  ])
  return (
    <div className="App">
      <Header />
      <div className='ordercontainer'></div>
      <Container />
    </div>
  );
}

export default App;
