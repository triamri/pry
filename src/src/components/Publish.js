import React, { Component } from 'react';
import axios from 'axios';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {darkBlack} from 'material-ui/styles/colors';

class ListExampleMessages extends Component {
  constructor(props) {
    super();
    this.state= {
      cekPublish: null
    }
  }

  componentDidMount() {
    let apiCekPublish = `http://localhost:3006/aspiration/all`;
    axios.get(apiCekPublish, {
      headers: {
        token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhOGE4YjA3MmM5NDQzMTNiOWFjOTBjNCIsImVtYWlsIjoidHJpYW1yaUBnbWFpbC5jb20iLCJpYXQiOjE1MTkwMjkwMDh9.f3-q6nmWncrbXFQj7qV6_87TKdeDfmlqRcIQKZpX0eU`
      }
    })
    .then(({ data })=> {
      this.setState({
        cekPublish: data.data
      })
    })
    .catch(err => console.log(err))
  }
      
  render () {
    return (
      <div style={{margin:20}}>
          <List>
            <Subheader>Today</Subheader>
            { this.state.cekPublish && this.state.cekPublish.map((cek, idx) => {
                  return (
                    <div>
                    <ListItem
                      leftAvatar={<Avatar src="images/ok-128.jpg" />}
                      secondaryText={
                        <p>
                          <span style={{color: darkBlack}}>{ cek.userID.firstName }</span> --
                          I&apos; { cek.aspiration } -- { cek.create_at }
                        </p>
                      }
                      secondaryTextLines={2}
                    />
                    <Divider inset={true} />
                    </div>
                  )  
                }
              )
            }
          </List>
          
      </div>
    )
  }
}

export default ListExampleMessages;