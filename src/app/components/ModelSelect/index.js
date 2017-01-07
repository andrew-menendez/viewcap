import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import Model from '../Model';
import {Button} from 'react-toolbox/lib/button';
import RefeshIcon from 'react-icons/lib/md/cached';
//react-icons/lib/md/cached

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
      this.key= this.props.user + '_models';

      this.processResponse = this.processResponse.bind(this);
      this.getModels = this.getModels.bind(this);

    }

  processResponse(response){
    let _this=this;
    if(response.data.errors && response.data.errors.length > 0){
      console.log("there was an errrrrror?")
      console.error(response.data.errors)
    } else {
      console.log("models are",response.data.modelInfo)
      _this.setState({
        models:response.data.modelInfo
      })
      console.log(response.data.modelInfo)
      if(response.data.modelInfo){
        localStorage.setItem(this.key, JSON.stringify(response.data.modelInfo));
      }
    }
  }

  componentDidMount() {
    // let _this=this;
        this.setState({loading: true})
        console.log(this.modelCheck());
        if(this.modelCheck()){
          return
        } else {
          this.getModels();
        }

  }

  getModels(){
    let _this=this;
    return axios.get('api/models', {
              params:{
                user:this.props.user
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

  modelCheck(){
    let _models=JSON.parse(localStorage.getItem(this.key));
    console.log(_models);

    if(_models){
      this.setState({models:_models})
    }
    return (_models) ? true : false;

  }

  render() {
    const { className} = this.props;
    const models= this.state.models;

    return (
      <div className={classnames('ModelSelect', className)} >
      <Button icon={<RefeshIcon/>} onClick={this.getModels}> refresh model list </Button>
        {(models) ? models.map((model,i)=> <Model key={i} modelobj={model}/>)
          : <span>no models found</span>
        }

      </div>
    );
  }
}

ModelSelect.propTypes={
    user:PropTypes.string.isRequired
  };

export default ModelSelect;