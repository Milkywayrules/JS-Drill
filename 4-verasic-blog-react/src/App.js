import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TopNavbar from './components/TopNavbar';
import HomeHero from './components/HomeHero';
import useFetch from './hooks/UseFetch';

const makeUserUrl = (user) => `https://api.github.com/users/${user}`;

function App() {
  const [user, setUser] = useState('');
  const { response, isError, isLoading, setUrl } = useFetch(makeUserUrl('milkywayrules'));

  return (
    <Router>
      <div className="bg-gray-50 text-gray-900">
        <TopNavbar />

        <div className="p-20 border">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setUrl(makeUserUrl(user));
            }}
          >
            <input
              type="text"
              onChange={(e) => {
                setUser(e.target.value);
              }}
              value={user}
              id="input-box"
            />
            <button type="submit">Cari</button>
          </form>
          {isLoading && <p>Loading...</p>}
          {isError && <p>isError.message</p>}
          {response && (
            <a href={response.html_url}>
              Click here:
              {response.login}
            </a>
          )}
        </div>

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
