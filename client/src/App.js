import './App.css';
import './fontawesome';
//Import REACT-ROUTER-DOM
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Import components
import Home from './components/home';
import Login from './components/login';
import Registration from 'components/registration';
import Account from './components/account';
import Contact from 'components/contact';
import Search from 'components/search';
//import axios from 'axios';

//import { NavBar } from "./components/navbar/navbar";

//Main App component - put everything here
function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/login" component={ Login } />
      <Route path="/registration" component={ Registration } />
      <Route path="/account" component={ Account } />
      <Route path="/search" component={ Search } />
      <Route path="/contact" component={ Contact } />

   {/*   <Route path="/:user" component={ User } />
      <Route component={ NoMatch } />
    */}  
       
      </Switch>
    </BrowserRouter>
  );
}

export default App;
