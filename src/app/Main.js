import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationBar from './components/NavigationBar';
import DreamlineTable from './components/DreamlineTable';
import TimescaleCard from './components/TimescaleCard';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 100,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='main-container'> 
          <NavigationBar
            title='Dreamline Template'
          />
          <div className='container-fluid text-center'>
            <div className='row top-bottom-buffer'>
              <div className='col-xs-12'>
                <TimescaleCard/> 
              </div>
            </div>
            <div className='row top-bottom-buffer'>
              <div className='col-xs-4'>
                <DreamlineTable
                  title='Having'
                  exampleLine='Audi R8'
                />
              </div>
              <div className='col-xs-4'>
                <DreamlineTable
                  title='Cost'
                  exampleLine='$2,003/month'
                />
              </div>
            </div>
            <div className='row top-bottom-buffer'>
              <div className='col-xs-4'>
                <DreamlineTable
                  title='Being'
                  exampleLine='Able to play a Jazz piano piece'
                />
              </div>
              <div className='col-xs-4'>
                <DreamlineTable
                  title='Doing'
                  exampleLine='Practice 1 hour a week through an online course'
                />
              </div>
              <div className='col-xs-4'>
                <DreamlineTable
                  title='Cost'
                  exampleLine='$0'
                />
              </div>
            </div>
            <div className='row top-bottom-buffer'>
              <div className='col-xs-4'>
                <DreamlineTable
                  title='Doing'
                  exampleLine='Autocross in my WRX'
                />
              </div>
              <div className='col-xs-4'>
                <DreamlineTable
                  title='Cost'
                  exampleLine='$500'
                />
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;