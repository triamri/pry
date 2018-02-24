import React, { Component } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class TableExampleSimple extends Component {
  constructor(props) {
    super();
    this.state = {
      users: null
    }
  }

  componentDidMount () {
    axios.get(`http://localhost:3006/users/all/`, {
        headers: {
          token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhOGE4YjA3MmM5NDQzMTNiOWFjOTBjNCIsImVtYWlsIjoidHJpYW1yaUBnbWFpbC5jb20iLCJpYXQiOjE1MTkwMjkwMDh9.f3-q6nmWncrbXFQj7qV6_87TKdeDfmlqRcIQKZpX0eU`
        }
      }).then(({ data }) => {
        console.log('users ',data);
        this.setState({
          users: data.data
        })
      }).catch(err => console.log(err))
  }

  render () {
    return (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>No</TableHeaderColumn>
              <TableHeaderColumn>ID User</TableHeaderColumn>
              <TableHeaderColumn>Nama Lengkap</TableHeaderColumn>
              <TableHeaderColumn>Email</TableHeaderColumn>
              <TableHeaderColumn>Alamat</TableHeaderColumn>                            
            </TableRow>
          </TableHeader>
          <TableBody>
            { this.state.users && this.state.users.map((user, idx) => { 
                  return (
                    <TableRow key={ idx }>
                      <TableRowColumn>{ idx+1 }</TableRowColumn>
                      <TableRowColumn>{ user._id }</TableRowColumn>              
                      <TableRowColumn>{ user.firstName }</TableRowColumn>
                      <TableRowColumn>{ user.email }</TableRowColumn>
                      <TableRowColumn>{ user.address }</TableRowColumn>              
                    </TableRow>
                  )
                }
              ) 
            }

          </TableBody>
        </Table>
    )
  }
}

export default TableExampleSimple;