import React from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';

const DisplayParam = () => {
  const { param } = useParams();
  return <h1>{param}</h1>;
};

const App = () => {
  return (
    <Router>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Switch>
          <Route path="/:param" component={DisplayParam} />
          <Route path="/:param" component={DisplayParam} />
          <Route path="/" exact>
            <h1>Welcome! Enter something in the URL after /</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
