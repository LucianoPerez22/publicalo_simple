
import {
  BrowserRouter as Router,
  Route, 
} from "react-router-dom";

//Componets
import Main from './components/main/Main';
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
