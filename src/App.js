import React from 'react';
import './App.css';
import './assets/css/css.css';
import './assets/css/test.scss';
import './assets/css/About.css';
import "./assets/css/Footer.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Context from './assets/js/context';
import Home from './component/main/Home/Home';
import Main from './component/main/Home/Main';
import About from './component/main/About';
import Project from './component/main/Project';
import Contact from './component/main/Contact';
import { ToastContainer } from "react-toastify";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      Lang:'en'
    };
   
  }



  render() {
    return (
      <BrowserRouter >
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
    

        <Context.Provider value={{
          value: this.state,
          action: {
          }
        }} >

          <Switch>

            <Route exact path='/' component={Home} />
            <Route  path='/Main' component={Main} />
            <Route  path='/About' component={About} />
            <Route  path='/Project' component={Project} />
            <Route  path='/Contact' component={Contact} />
           
          </Switch>
        </Context.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
