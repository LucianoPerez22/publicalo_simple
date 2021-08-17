import logo from './logo.svg';
import './App.css';

//Componets
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <div className="container">
      <div style={{ background: '#E99338' }}>
        <Header />
      </div>
      
      <div className="mt-4">
        <Main />
      </div>
      
    </div>
  );
}

export default App;
