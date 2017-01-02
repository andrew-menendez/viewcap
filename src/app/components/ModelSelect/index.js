import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import Model from '../Model';
// import './style.css';


class ModelSelect extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor(props) {
        super(props)
        this.state = {
            loading:false,
            models: []
        }

      this.processResponse = this.processResponse.bind(this);
    }

  processResponse(response){
    let _this=this;
    if(response.data.errors.length > 0){
      console.log("there was an errrrrror?")
      console.error(response.data.errors)
    } else {
      console.log("models are",response.data.modelInfo)
      _this.setState({
        models:response.data.modelInfo
      })
    }
  }

  componentDidMount() {
    let _this=this;
        _this.setState({loading: true})
        axios.get('api/models', {
          params:{
            user:'viewcap'
          }
        })
        .then(function (response) {
          _this.setState({loading: false})
          _this.processResponse(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  render() {
    const { className} = this.props;
    const models= this.state.models;

    return (
      <div className={classnames('ModelSelect', className)} >
        {(models) ? models.map((model,i)=> <Model key={i} modelobj={model}/>)
          : <span>no models found</span>
        }

      </div>
    );
  }
}

export default ModelSelect;