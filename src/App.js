import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = '/' exact component = {Home} />
        <Route path = '/service '  component = {Service} />
        <Route path = '/produkte ' component = {Produkte} />
        <Route path = '/log-in' exact component = {LogIn} />
      </Switch>
      <Footer />   
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
    </Router>
  );
}

export default App;
