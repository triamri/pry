import React, { Component } from 'react';
import axios from 'axios';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {darkBlack} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  button: {
    marginLeft: '75px',
    marginBottom: '20px'    
  },
  btnLeft: {
    marginLeft: '20px'
  }
}

class ListExampleMessages extends Component {
  constructor(props) {
    super();
    this.state= {
      cekPublish: null
    }
  }

  componentDidMount() {
    let apiCekPublish = `http://localhost:3006/aspiration/cek`;
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
  
  handlePublishAspiration = (id) => {
    let { history } = this.props;
    let apiPublish = `http://localhost:3006/aspiration/update/${id}`;
    let publish = {
      publish: 'Y'
    };
    axios.put(apiPublish, publish, {
      headers: {
        token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhOGE4YjA3MmM5NDQzMTNiOWFjOTBjNCIsImVtYWlsIjoidHJpYW1yaUBnbWFpbC5jb20iLCJpYXQiOjE1MTkwMjkwMDh9.f3-q6nmWncrbXFQj7qV6_87TKdeDfmlqRcIQKZpX0eU`
      }
    })
    .then(({ data }) => {
      history.push('/aspirations');
    })
    .catch(err => console.log(err))
  }

  handleRemoveAspiration = (id) => {
    let { history } = this.props;
    let apiPublish = `http://localhost:3006/aspiration/remove/${id}`;
    axios.delete(apiPublish, {
      headers: {
        token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhOGE4YjA3MmM5NDQzMTNiOWFjOTBjNCIsImVtYWlsIjoidHJpYW1yaUBnbWFpbC5jb20iLCJpYXQiOjE1MTkwMjkwMDh9.f3-q6nmWncrbXFQj7qV6_87TKdeDfmlqRcIQKZpX0eU`
      }
    })
    .then(({ data }) => {
      history.push('/aspirations');
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
                    <RaisedButton label="Publish" primary={true} style={style.button} onClick={ () => this.handlePublishAspiration(cek._id)} />
                    <RaisedButton label="Delete" secondary={true} style={style.btnLeft} onClick={ () => this.handleRemoveAspiration(cek._id)} />
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