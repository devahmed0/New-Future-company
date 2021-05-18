import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Apps from './components/Main/Apps';
import Contact from './components/Main/Contact';
import './App.css';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route  path="/Project" component={Apps} />
      <Route  path="/Contact" component={Contact} />
    </Switch>
  </Router>
  );
}

export default App;
