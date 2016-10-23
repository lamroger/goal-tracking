import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

export default class DreamlineTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card>
        <CardTitle title={this.props.title} />
        <CardText>
          <ol>
            <li>
              <TextField
                hintText={this.props.exampleLine}
                fullWidth={true}
              />
            </li>
            <li>
              <TextField
                fullWidth={true}
              />
            </li>
            <li>
              <TextField
                fullWidth={true}
              />
            </li>
            <li>
              <TextField
                fullWidth={true}
              />
            </li>
            <li>
              <TextField
                fullWidth={true}
              />
            </li>
          </ol>
        </CardText>
      </Card>
    );
  }
}
