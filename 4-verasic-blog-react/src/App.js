// import { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import useTabTitle from './hooks/UseTabTitle';

import TopNavbar from './components/topnavbar/TopNavbar';
import Story from './pages/Story';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  const { setTabTitle } = useTabTitle('Verasic Blog');

  return (
    <Router>
      <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
        <TopNavbar />

        <main>
          <Switch>
            <Route exact path="./">
              <Home onClick={() => setTabTitle('Home')} />
            </Route>

            <Route path="./story">
              <Story onClick={() => setTabTitle('Story')} />
            </Route>

            <Route path="./portfolio">
              <Portfolio onClick={() => setTabTitle('Portfolio')} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
