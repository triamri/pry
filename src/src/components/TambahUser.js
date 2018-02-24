import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  paper: {
    margin: '20px'
  }
};

const TextFieldExampleSimple = () => (
  <div style={styles.paper}>
    <TextField
      fullWidth={true}
      hintText="Nama Depan"
    /><br />
    <br />
    <TextField
      fullWidth={true}
      hintText="Nama Belakang"
    /><br />
    <br />
    <TextField
      hintText="Alamat"
      fullWidth={true}
    /><br />
    <br />
    <TextField
      hintText="No. handphone"
      fullWidth={true}
    /><br />
    <br />
    <TextField
      hintText="Email"
      fullWidth={true}
    /><br />
    <br />
    <TextField
      hintText="Password"
      fullWidth={true}
    /><br />
    <br />
    <FlatButton label="Submit" primary={true} />
  </div>
);

export default TextFieldExampleSimple;