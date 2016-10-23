import React from 'react';
import DreamlineTable from './DreamlineTable';

export default class NextStepsCard extends React.Component {
  render() {
    return (
      <div className='row'> 
        <div className='col-md-4'>
          <DreamlineTable
            title='Steps Now'
            exampleLine='Find a showroom, schedule a test drive'
          />
        </div>
        <div className='col-md-4'>
          <DreamlineTable
            title='Tomorrow'
            exampleLine='Take a test drive'
          />
        </div>
        <div className='col-md-4'>
          <DreamlineTable
            title='Day After'
            exampleLine='Decide on desired details & extras'
          />
        </div>
      </div>
    );
  }
}
