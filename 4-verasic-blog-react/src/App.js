import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TopNavbar from './components/TopNavbar';
import HomeHero from './components/HomeHero';

function App() {
  return (
    <Router>
      <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
        <TopNavbar />

        <main>
          <Switch>
            <Route exact path="/">
              <HomeHero />
            </Route>
            <Route path="/story">
              <div>story</div>
            </Route>
            <Route path="/portfolio">
              <div>portfolio</div>
            </Route>
            <Route path="/contact">
              <div>contact</div>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
