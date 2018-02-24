import React, { Component } from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  paper: {
    margin: '20px'
  }
};

class TextFieldExampleSimple extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      contact: '',
      address: ''
    }
  }

  handleClick = () => {
    let { history } = this.props;
    let apiUser = `http://localhost:3006/users/signup/`;
    let newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      contact: this.state.contact,
      address: this.state.address
    };
    axios.post(apiUser, newUser)
      .then(({ data }) => {
        history.push('/users/list');
      })
      .catch(err => console.log(err))
  }
  
  render () {
    return (
      <div style={styles.paper}>
        <TextField
          fullWidth={true}
          hintText="Nama Depan"
          onChange={(event,newValue) => this.setState({
            firstName: newValue
          })}
        /><br />
        <br />
        <TextField
          fullWidth={true}
          hintText="Nama Belakang"
          onChange={(event,newValue) => this.setState({
            lastName: newValue
          })}
        /><br />
        <br />
        <TextField
          hintText="Alamat"
          fullWidth={true}
          onChange={(event,newValue) => this.setState({
            address: newValue
          })}
        /><br />
        <br />
        <TextField
          hintText="No. handphone"
          fullWidth={true}
          onChange={(event,newValue) => this.setState({
            contact: newValue
          })}
        /><br />
        <br />
        <TextField
          hintText="Email"
          fullWidth={true}
          onChange={(event,newValue) => this.setState({
            email: newValue
          })}
        /><br />
        <br />
        <TextField
          hintText="Password"
          fullWidth={true}
          onChange={(event,newValue) => this.setState({
            password: newValue
          })}
        /><br />
        <br />
        <FlatButton 
          label="Submit" 
          primary={true}
          onClick={(event) => this.handleClick(event)} 
        />
      </div>
    )
  }
}

export default TextFieldExampleSimple;