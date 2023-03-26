import logo from './logo.svg';
import './App.css';
import Watch from './components/Watch/Watch';
import { useEffect, useState } from 'react';
import LocalStorage from './components/Utilities/LocalStorage';
import Khob from './components/SubKhob/Khob';
import Cosmetic from './components/Component/Cosmetic/Cosmetic';

const mainStyle = {
  color: 'red',
  border: '4px solid red',
  borderRadius: '20px',
  margin: '30px'
}

function App() {
  const [count, setCount] = useState(0);
 
  return (
    <div className="App " style={mainStyle}>
      <Watch name='Digital Clock' count={count} />
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <LocalStorage />
      <Khob count={count} />
      <Cosmetic />
      

      
      
    </div>
  );
}

export default App;
