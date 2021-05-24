import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importing Page Components
import Home from './components/pages/Index';
import Breeds from './components/pages/Breeds';
import Categories from './components/pages/Categories';
import Favourites from './components/pages/Favourites';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/breeds" component={Breeds} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/favourites" component={Favourites} />
          </Switch>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
