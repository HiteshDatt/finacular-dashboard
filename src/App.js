import './App.css'
import Dashboard from './components/Dashboard'
import LeftBar from './components/LeftBar'
import RightBar from './components/RightBar'


function App() {
  return (
    <div className="App">
      <LeftBar/>
      <Dashboard/>
      <RightBar/>
    </div>
  );
}

export default App;
