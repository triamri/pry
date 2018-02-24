import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class DrawerSimpleExample extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Drawer openSecondary={true} open={this.props.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

