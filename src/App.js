import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Agentur from './pages/Agentur/Agentur';
import Kontakt from './pages/Kontakt/Kontakt';
import Leistungen from './pages/Leistungen/Leistungen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import Referenzen from './pages/Referenzen/Referenzen';
import Datenschutz from './pages/Datenschutz/Datenschutz';
import Impressum from './pages/Impressum/Impressum';
import AGB from './pages/AGB/AGB';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/leistungen' component={Leistungen} />
        <Route path='/kontakt' component={Kontakt} />
        <Route path='/agentur' component={Agentur} />
        <Route path='/referenzen' component={Referenzen} />
        <Route path='/datenschutz' component={Datenschutz} />
        <Route path='/impressum' component={Impressum} />
        <Route path='/AGB' component={AGB} />

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
