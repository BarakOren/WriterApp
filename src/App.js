import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from "./components/homepage/homepage.component";
import Header from './components/header/header.component';
import About from './components/about/about.component';
import Contact from './components/contact/contact.component';
import WebVesrion from './components/web-version/web-version.component';
import SavedPage from './components/saved-page/saved-page.component';
import Menu from "./components/menu/menu.component";

function App() {

  return (
    <div>
      <Menu />
      <Header />
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/web-version" component={WebVesrion} />
      <Route exact path="/saved" component={SavedPage} />
      </Switch>
    </div>
  );
}

export default App;
