import React from 'react';

import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

export default class DrawerSimpleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      badge: 0
    };
  }
  
  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({
  //       badge: this.state.badge + 1
  //     })
  //   }, 1000);
  // }

  render() {
    return (
      <AppBar>
        <Badge
          badgeContent={this.state.badge}
          secondary={true}
          badgeStyle={{top: 12, right: 12}}
        >
          <IconButton tooltip="Notifications">
            <NotificationsIcon />
          </IconButton>
        </Badge>
      </AppBar>
    );
  }
}

