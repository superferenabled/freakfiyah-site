import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import Home from './sections/Home/Home';
import Games from './sections/Games/Games';
import Blog from './sections/Blog/Blog';
import Contact from './sections/Contact/Contact';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <Router>
      <div>
        <Navigation></Navigation>
        <Switch>
          <Route path="/games">
            <Games />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
