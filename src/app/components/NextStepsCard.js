import React from 'react';
import DreamlineTable from './DreamlineTable';

export default class NextStepsCard extends React.Component {
  render() {
    return (
      <div> 
        <DreamlineTable
          title='Steps Now'
          exampleLine='Find a showroom, schedule a test drive'
        />
        <DreamlineTable
          title='Tomorrow'
          exampleLine='Take a test drive'
        />
        <DreamlineTable
          title='Day After'
          exampleLine='Decide on desired details & extras'
        />
      </div>
    );
  }
}
