import './App.css';
//Import REACT-ROUTER-DOM
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Import components
import Home from './components/home';
//import { NavBar } from "./components/navbar/navbar";

//Main App component - put everything here
function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={ Home } />
  {/*     <Route path="/about" component={ About } />
      <Route path="/:user" component={ User } />
      <Route component={ NoMatch } />
    */}     
      </Switch>
    </BrowserRouter>
  );
}

export default App;
