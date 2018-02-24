import React from 'react';
import axios from 'axios';

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
  
  componentDidMount() {
    setInterval(() => {
      axios.get(`http://localhost:3006/aspiration/cek`, {
        headers: {
          token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhOGE4YjA3MmM5NDQzMTNiOWFjOTBjNCIsImVtYWlsIjoidHJpYW1yaUBnbWFpbC5jb20iLCJpYXQiOjE1MTkwMjkwMDh9.f3-q6nmWncrbXFQj7qV6_87TKdeDfmlqRcIQKZpX0eU`
        }
      }).then(({ data }) => {
        console.log(data);
        this.setState({
          badge: data.data.length
        })
      }).catch(err => console.log(err))
    }, 10000);
  }

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

