import './App.css';
import { useEffect, useState } from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from "./components/homepage/homepage.component";
import Header from './components/header/header.component';
import About from './components/about/about.component';
import Contact from './components/contact/contact.component';
import WebVesrion from './components/web-version/web-version.component';
import SavedPage from './components/saved-page/saved-page.component';
import Menu from "./components/menu/menu.component";

function App() {

  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)    
      }
      window.addEventListener('resize', handleResize)
  },[width])



  return (
    <div className="App">
      {
        width < 800 ? <Menu /> : <Header />
      }
      <Switch>
      <Route exact path="/WriterApp" component={HomePage} />
      <Route exact path="/WriterApp/about" component={About} />
      <Route exact path="/WriterApp/contact" component={Contact} />
      <Route exact path="/WriterApp/web-version" component={WebVesrion} />
      <Route exact path="/WriterApp/saved" component={SavedPage} />
      </Switch>
    </div>
  );
}

export default App;
