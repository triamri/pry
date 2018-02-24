import React from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import Delete from 'material-ui/svg-icons/action/delete';

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '0 32px 16px 0',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

const MenuExampleIcons = () => (
  <div>
    <Paper style={style.paper}>
      <Menu>
        <Link to="/"><MenuItem primaryText="Home" leftIcon={<RemoveRedEye />} /></Link>
        <Link to="/users/list"><MenuItem primaryText="Users" leftIcon={<PersonAdd />} /></Link>
        <Link to="/aspirations"><MenuItem primaryText="Aspiration" leftIcon={<ContentLink />} /></Link>
        {/* <Divider />
        <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
        <MenuItem primaryText="Download" leftIcon={<Download />} /> */}
        <Divider />
        <MenuItem primaryText="logout" leftIcon={<Delete />} />
      </Menu>
    </Paper>
  </div>
);

export default MenuExampleIcons;