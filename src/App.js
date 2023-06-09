import './App.css';
import SideMenu from './components/SideMenuComponent';
import Home from './components/HomeComponent';

function App() {
  return (
    <div className="App">
      <SideMenu/>
      <div className='vertical-divider'></div>
      <Home/>
      <div className='vertical-divider'></div>
      <div className='temp'></div>
    </div>
  );
}

export default App;
