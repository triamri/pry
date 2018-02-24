import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import {
  Card, 
  CardHeader
} from 'material-ui/Card';

import ListUsers from './ListUsers';
import TambahUser from './TambahUser';

const style = {
  paper: {
    marginRight: '20px',
  }
};

class TableExampleSimple extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Card style={style.paper}>
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
        />
        <Link to="/users/tambah">Tambah</Link>
        <Route path="/users/list" component={ListUsers} />
        <Route path="/users/tambah" component={TambahUser}/>        
      </Card>  
    )
  }
}

export default TableExampleSimple;