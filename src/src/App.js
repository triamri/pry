import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Home from './components/Home';
import Users from './components/Users';
import Aspirations from './components/Aspirations';

const muiTheme = getMuiTheme({
  palette: {
    textColor: 'cyan500',
  },
  appBar: {
    height: 50,
  },
});

class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <NavBar />
        <Router>
        <div style={styles.root}>
          <Menu />
          <Route exact path="/" component={Home}/>
          <Route path="/users" component={Users} /> 
          <Route path="/aspirations" component={Aspirations}/>          
        </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'left',
    marginTop: 20,
    marginLeft: 10
  }
};

export default App;
