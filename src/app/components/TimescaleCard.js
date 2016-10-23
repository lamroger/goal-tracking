import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

function TitleCard(props) {
  return (
    <div className='top-bottom-buffer'> 
      <Card>
        <CardTitle title={props.children} />
      </Card>
    </div>
  );
}

export default class TimescaleCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 6,
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({value});
  }

  render() {
    return (
      <TitleCard>
        In 
        <DropDownMenu 
          underlineStyle={{display: 'none'}} 
          style={{
            fontSize: 24,
          }} 
          value={this.state.value} 
          onChange={this.handleChange}
        >
          <MenuItem value={6} primaryText="6" />
          <MenuItem value={12} primaryText="12" />
        </DropDownMenu> 
        months I dream of: 
      </TitleCard>
    );
  }
}
