import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Header from './components/partials/Header';
import Upload from './components/Upload';
import FilesList from './components/FilesList';
import NotFound from './components/NotFound';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />

      <div className="main-content">
        <Switch>
          <Route component={ Upload } exact path="/" />
          <Route component={ FilesList } path="/files" />
          <Route path='*' exact={true} component={NotFound} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;