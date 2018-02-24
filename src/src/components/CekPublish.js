import React from 'react';
// import MobileTearSheet from '../../../MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {darkBlack, lightBlack} from 'material-ui/styles/colors';
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

const ListExampleMessages = () => (
  <div style={{margin:20}}>
      <List>
        <Subheader>Today</Subheader>
        <ListItem
          leftAvatar={<Avatar src="images/ok-128.jpg" />}
          primaryText="Brunch this weekend?"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Brendan Lim</span> --
              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
            </p>
          }
          secondaryTextLines={2}
        />
        <RaisedButton label="Publish" primary={true} style={style.button} />
        <RaisedButton label="Delete" secondary={true} style={style.btnLeft} />
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="images/kolage-128.jpg" />}
          primaryText={
            <p>Summer BBQ&nbsp;&nbsp;<span style={{color: lightBlack}}>4</span></p>
          }
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>to me, Scott, Jennifer</span> --
              Wish I could come, but I&apos;m out of town this weekend.
            </p>
          }
          secondaryTextLines={2}
        />
        <RaisedButton label="Publish" primary={true} style={style.button} />
        <RaisedButton label="Delete" secondary={true} style={style.btnLeft} />
        <Divider inset={true} />
      </List>
      
  </div>
);

export default ListExampleMessages;