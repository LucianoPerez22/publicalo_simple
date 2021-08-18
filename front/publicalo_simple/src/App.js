import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";

//Componets
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Publish from './components/publish_facebook/Publish';

function App() {
  return (
    <Router>
    <div className="container">
      <Route exact path="/" component={Main} />
      <Route exact path="/publicar" component={Publish} />
    </div>
</Router>

  );
}

export default App;
