import React, { PropTypes, Component } from 'react';
import ReactTable from 'react-table'
import axios from 'axios'
import classnames from 'classnames';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import {Button} from 'react-toolbox/lib/button';
import Navigation from 'react-toolbox/lib/navigation';
import WidgetWrapper from '../WidgetWrapper';
import TableCheckbox from './TableCheckbox.js';
import theme from './react-table.scss';
import AddGraphModal from './AddGraphModal';
import './style.css';

export default class Comparables extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
    constructor(props) {
        super(props);
        this.state = {
                activeTab: 'comparables',
                data:[],
                loading:true,
                widgets: [
                  ],
                checkedRows:{},
                graphIndex:0,
                modalIsOpen: false
              }

      this.fetchData=this.fetchData.bind(this)
      this.removeWidget=this.removeWidget.bind(this)
      this.addGraph=this.addGraph.bind(this)
      this.processData=this.processData.bind(this)
      this.handleCheck=this.handleCheck.bind(this)

    }

    fetchData(state, instance){
      this.setState({loading:true});

      return axios.get('api/data', {
              params:{
                username:'viewcap',
                model:'LandBank',
                dataset:'Comparables'
              }
          })
      .then((res)=>{

        this.setState({
          data:res.data.records,
          loading:false
        })
        console.log(res);
        console.log(res.data.records);
        console.log(this.state);
      })

    }

    processData(records){
      let _records=records;
      const numericColumns=[
                            "CLOS3",
                            "CLOS4",
                            "averageSales",
                            "closedToDate",
                            "last12Months",
                            "lastYearClose",
                            "lotSQFT",
                            "monthAverage",
                            "thisYearClosed",
                            "totalLots"
                            ]
      _records.forEach(function(record){
        record.checked=false;
       numericColumns.forEach(function(col){
         if(record[col]){
           record[col]=Number(record[col]);
         }
       })
     })
      return _records;
    }

    componentDidMount() {
        this.fetchData();
    }

    removeWidget(id){
    //need to use some filter method
      let _widgets=this.state.widgets;
      console.log(_widgets);
      if(_widgets.length){
        _widgets = _widgets.filter(widget=> widget.id != id)
      }

      this.setState({widgets:_widgets})
    }

    addGraph(){

      let params={width:600,
                height:300,
                xKey:'subdivision',
                xName:' Sub Division',
                yName:'',
                bar1Key:'closedToDate',
                bar2Key:'averageSales',
                bar3Key:'thisYearClosed'
        }
      console.log("add graph data", this.state.data);
      let graphIndex=this.state.graphIndex
      let _data=this.processData(this.state.data.slice(0,10))
      let _widgets=this.state.widgets;
      let _newWidget={
                      id:graphIndex,
                      type: 'BarChart',
                      title: 'Subdivision Key Stats',
                      data:_data,
                      params:params
                    };
      _widgets.push(_newWidget);
      let _graphIndex=graphIndex + 1;
      this.setState({widgets:_widgets, graphIndex:_graphIndex});
    }

    handleCheck(row, index, value){
      let _checkedRows=this.state.checkedRows;
      (value) ? _checkedRows[index]=row : delete _checkedRows[index];
      this.setState({checkedRows:_checkedRows})
      console.log(this.state.checkedRows);
    }

    addCustomGraph(graphParams, type, title){
      console.log(graphParams);
      console.log("add graph data", this.state.checkedRows);
      let graphIndex=this.state.graphIndex
      let dataObj=this.state.checkedRows;
      let dataArray=Object.values(dataObj);
      let _data=this.processData(dataArray)
      let _widgets=this.state.widgets;
      let _newWidget={
                      id:graphIndex,
                      type: type,
                      title: title,
                      data:_data,
                      params:graphParams
                    };
      _widgets.push(_newWidget);
      let _graphIndex=graphIndex + 1;
      this.setState({widgets:_widgets, checkedRows:{}, graphIndex:_graphIndex});
    }



  // since this is a landbank only component, I suppose we can just hardcode in the inputs?
  // we should do pre-canned graphs and custom graphs.

  render() {
    const { className, panelClose } = this.props;
    const { data, loading, widgets } = this.state;
    const removeWidget = this.removeWidget;
    const handleCheck = this.handleCheck;
    const actions = [
        { label: 'Add Graph', raised: true, icon: 'add', onClick:this.addGraph},
        { label: 'Custom Graph', raised: true, icon: 'add',onClick:this.addCustomGraph.bind(this)}
      ];
    const columns = [
    {header:'select',render:({index,row}) => <TableCheckbox index={index} row={row} checkFunction={handleCheck}> </TableCheckbox>},
    {header: 'builder', accessor:'builder'},
    {header:'area', accessor:'area'},
    {header:'averageSales', accessor:'averageSales'},
    {header:'closedToDate', accessor:'closedToDate'},
    {header:'type', accessor:'type'},
    {header:'zone', accessor:'zone'},
    {header:'Zip Code', accessor:'zipCode'},
    {header:'Total Lots', accessor:'totalLots'},
    {header:'Sub Division', accessor:'subdivision'}
    ]


    return (
      <div className={classnames('Comparables', className)}>
        <div className="tab-header">
          <h4>Comparables</h4>
          <Row around ="xs">
            <Col>
              <AddGraphModal selectedRows={this.state.data} addGraph={this.addCustomGraph.bind(this)} panelClose={panelClose} style={{float:'left'}}/>
            </Col>
            <Col>
              <Button label='Add pre-built Graph' raised icon='add' onClick={this.addGraph.bind(this)} style={{float:'left'}}/>
            </Col>
          </Row>


        </div>
        <Grid fluid>
        <Row around = "xs">
          {(widgets) ? widgets.map((widget,i)=> <WidgetWrapper key={i} widget={widget} remove={removeWidget} /> )
                    : <span>no widgets found</span>
                  }
        </Row>
        <Row around = "xs">
          <Col xs={12}>
            <ReactTable
              columns={columns}
              //manual // This forces table not to paginate or sort automatically, so we can handle things server-side
              data={data} // Set the rows to be displayed
              //pages={this.state.pages} // Display the total number of pages
              loading={loading} // Display the loading overlay when we need it
              //onChange={this.fetchData} // Request new data when things change
              pageSize={15}
              style={theme}

            />
          </Col>
        </Row>
        </Grid>
      </div>
    );
  }
}

/*


*/



