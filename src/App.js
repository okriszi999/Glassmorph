import './style/style.css';
import Header from './component/header'
import Configurator from './component/configurator';
import Result from './component/result';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainSection">
        <Configurator />
        <Result />
      </div>
    </div>
  );
}

export default App;
