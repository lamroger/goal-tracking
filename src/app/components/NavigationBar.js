import React from 'react';
import AppBar from 'material-ui/AppBar';

export default class NavigationBar extends React.Component {
  render() {
    return <AppBar
      title={this.props.title} 
      showMenuIconButton={false} 
    />
  }
}