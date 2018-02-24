import React, { Component } from 'react';
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
            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>454jddsf4336</TableRowColumn>              
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>jhon@smith.com</TableRowColumn>
              <TableRowColumn>jalan</TableRowColumn>              
            </TableRow>
            <TableRow>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>454jddsf4336</TableRowColumn>              
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>jhon@smith.com</TableRowColumn>
              <TableRowColumn>jalan</TableRowColumn>              
            </TableRow>
          </TableBody>
        </Table>
    )
  }
}

export default TableExampleSimple;