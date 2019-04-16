import React, { Component } from 'react';
import {Provider} from 'react-redux';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store/configStore';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" exact component={Home} />
        </Router>
      </Provider>
      
    );
  }
}

export default App;
