import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationBar from './components/NavigationBar';
import DreamlineTable from './components/DreamlineTable';
import TimescaleCard from './components/TimescaleCard';
import NextStepsCard from './components/NextStepsCard';

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
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='main-container'> 
          <NavigationBar
            title='Dreamline Worksheet'
          />
          <div className='container-fluid text-center'>
            <div className='row'>
              <div className='col-md-12'>
                <TimescaleCard/> 
              </div>
            </div>
            <div className='steps col-md-12'>
              <div className='row'>
                <div className='col-md-4'>
                  <DreamlineTable
                    title='Having'
                    exampleLine='Audi R8'
                  />
                </div>
                <div className='col-md-4'>
                  <DreamlineTable
                    title='Cost'
                    exampleLine='$2,003/month'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-4'>
                  <DreamlineTable
                    title='Being'
                    exampleLine='Able to play a Jazz piano piece'
                  />
                </div>
                <div className='col-md-4'>
                  <DreamlineTable
                    title='Doing'
                    exampleLine='Practice 1 hour a week through an online course'
                  />
                </div>
                <div className='col-md-4'>
                  <DreamlineTable
                    title='Cost'
                    exampleLine='$0'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-4'>
                  <DreamlineTable
                    title='Doing'
                    exampleLine='Autocross in my WRX'
                  />
                </div>
                <div className='col-md-4'>
                  <DreamlineTable
                    title='Cost'
                    exampleLine='$500'
                  />
                </div>
              </div>
              <hr/>
            </div>
            <div className='actionItems col-md-12'>
              <NextStepsCard/> 
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;