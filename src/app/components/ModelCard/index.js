import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';

// import './style.css';

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

export default class ModelCard extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  getUrl(loadPath){
    return loadPath.toLowerCase();
  }

  render() {
    const { className, modelobj } = this.props;
    var style={
      width:'350px',
      margin:'10px'
    }
    return (
      <div className={classnames('ModelCard', className)}>
        <Card style={style}>
          <CardTitle
            avatar="https://placeimg.com/80/80/animals"
            title="Avatar style title"
            subtitle="Subtitle here"
          />
          <CardMedia
            aspectRatio="wide"
            image="https://placeimg.com/800/450/nature"
          />
          <CardTitle
            title={modelobj.name}
            subtitle="Subtitle here"
          />
          <CardText>{dummyText}
          <Link to={this.getUrl(modelobj.loadPath)}>{modelobj.name}</Link>
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