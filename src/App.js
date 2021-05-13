import './style/style.css';
import Header from './component/header'
import Configurator from './component/configurator';
import Result from './component/result';
import { useState } from 'react';

function App() {

  const [blur, setBlur] = useState(20)
  const [transparency, setTransparency] = useState(100)

  return (
    <div className="App">
      <Header />
      <div className="mainSection">
        <Configurator getOriginalBlur={setBlur} getOriginalTransparency={setTransparency}/>
        <Result blur={blur} transparency={transparency}/>
      </div>
    </div>
  );
}

export default App;
