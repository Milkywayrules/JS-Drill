import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TopNavbar from './components/topnavbar/TopNavbar';
import Story from './pages/Story';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  let baseUrl;
  if (process.env.NODE_ENV === 'production') {
    baseUrl = process.env.REACT_APP_BASEURL;
  } else {
    baseUrl = process.env.REACT_APP_BASEURL_DEV;
  }

  return (
    <Router basename="">
      <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
        <TopNavbar />

        <main>
          <Switch>
            <Route exact path={baseUrl}>
              <Home />
            </Route>

            <Route path={`${baseUrl}story`}>
              <Story />
            </Route>

            <Route path={`${baseUrl}portfolio`}>
              <Portfolio />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
