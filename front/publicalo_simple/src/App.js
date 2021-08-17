import logo from './logo.svg';
import './App.css';

//Componets
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="container">
      <div style={{ background: '#E99338' }}>
        <Header />
      </div>
      
      <div className="mt-4">
        <Main />
      </div>

      <div className="container fixed-bottom">
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
