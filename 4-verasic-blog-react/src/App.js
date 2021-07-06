import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TopNavbar from './components/TopNavbar';
// import Homepage from './components/Homepage';
import HomeHero from './components/HomeHero';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    let isDarkMode = localStorage.getItem(`${process.env.REACT_APP_VERASIC_CONF}darkMode`);

    if (isDarkMode === 'true') {
      isDarkMode = true;
    } else if (isDarkMode === 'false') {
      isDarkMode = false;
    } else {
      isDarkMode = false;
    }

    return isDarkMode;
  });

  return (
    <Router>
      <div className="bg-gray-50 text-gray-900">
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
