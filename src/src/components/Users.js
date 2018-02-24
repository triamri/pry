import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import {
  Card, 
  CardHeader
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import ListUsers from './ListUsers';
import TambahUser from './TambahUser';

const style = {
  paper: {
    marginRight: '20px',
    width: '100%'
  },
  button: {
    marginLeft: '20px'
  }
};

class TableExampleSimple extends Component {
  constructor(props) {
    super();
  }

  render () {
    const { pathname } = this.props.location
    let linkto = ''
    if (pathname === '/users/list') {
      linkto = <Link to="/users/tambah">
                  <RaisedButton label="Tambah" primary={true} style={style.button} />
               </Link>
    } else {
      linkto = <Link to="/users/list">
                  <RaisedButton label="back" primary={true} style={style.button} />
               </Link>
    }
    return (
      <Card style={style.paper}>
        <CardHeader/>
          {linkto}
        <Route path="/users/list" component={ListUsers} />
        <Route path="/users/tambah" component={TambahUser}/>        
      </Card>  
    )
  }
}

export default TableExampleSimple;