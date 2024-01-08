import './App.css';
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'
//import './components/panels'
import DynamicGridLayout from './components/panels';

function App() {
  return (
    <div className="App">
      <DynamicGridLayout/>
    </div>
  );
}

export default App;
