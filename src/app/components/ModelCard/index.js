import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';

import theme from './theme.css';
import ModelIcon from '../ModelIcon';

//console.log(cardTheme)

const dummyText = 'Short model description for the end user... ';

export default class ModelCard extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  getUrl(loadPath){
    return loadPath.toLowerCase();
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    const { className, modelobj } = this.props;
    var style={
      width:'350px',
      margin:'10px',
      borderRadius:'5px'
    }

    return (
      <div className={classnames('ModelCard', className)}>

        <Card style={style}>
        <Link to={this.getUrl(modelobj.loadPath)} className="modelTitleLink">
            <CardTitle

              title={modelobj.name}
              subtitle="Subtitle here"
              style={theme}
            />
        </Link>
          <CardMedia

            children={<ModelIcon x={this.getRandomInt(1,6)}/>}
          />
          <CardText>{dummyText}

          </CardText>
          <CardActions>
            <Button label="Action 1" />
            <Button label="Action 2" />
          </CardActions>
        </Card>
      </div>
    );
  }
}