import React from 'react';
import {
  Card, 
  CardHeader
} from 'material-ui/Card';
import {
  Tabs, 
  Tab
} from 'material-ui/Tabs';

import Publish from './Publish';
import CekPublish from './CekPublish';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  paper: {
    marginRight: '20px',
  }
};

export default class TabsExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
    <Card style={styles.paper}>
      <CardHeader
        title="URL Avatar"
        subtitle="Subtitle"
      />
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Aspirations" value="a">
          <div style={{margin:20}}>
            <h2 style={styles.headline}>Controllable Tab A</h2>
            <Publish />
          </div>
        </Tab>
        <Tab label="Cek" value="b">
          <div style={{margin:20}}>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <CekPublish />
          </div>
        </Tab>
      </Tabs>
    </Card>
    );
  }
}