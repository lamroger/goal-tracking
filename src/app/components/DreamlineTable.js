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
      <div className='top-bottom-buffer'>
        <Card>
          <CardTitle title={this.props.title} />
          <CardText>
            <ol>
              <li>
                <TextField
                  hintText={this.props.exampleLine}
                  fullWidth={true}
                  name='first'
                />
              </li>
              <li>
                <TextField
                  fullWidth={true}
                  name='second'
                />
              </li>
              <li>
                <TextField
                  fullWidth={true}
                  name='third'
                />
              </li>
              <li>
                <TextField
                  fullWidth={true}
                  name='fourth'
                />
              </li>
              <li>
                <TextField
                  fullWidth={true}
                  name='fifth'
                />
              </li>
            </ol>
          </CardText>
        </Card>
      </div>
    );
  }
}
