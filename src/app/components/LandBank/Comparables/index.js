import React, { PropTypes, Component } from 'react';
import ReactTable from 'react-table'
import axios from 'axios'
import classnames from 'classnames';



import theme from './react-table.scss';


export default class Comparables extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
    constructor(props) {
        super(props);
        this.state = {
                activeTab: 'comparables',
                data:[],
                loading:true
              }

      this.fetchData=this.fetchData.bind(this)
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

    componentDidMount() {
        this.fetchData();
    }

  // since this is a landbank only component, I suppose we can just hardcode in the inputs?
  //

  render() {
    const { className } = this.props;
    const { data, loading } = this.state;
    const columns = [
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
        <p className="hello">loading: {loading}</p>


          <ReactTable
            columns={columns}
            //manual // This forces table not to paginate or sort automatically, so we can handle things server-side
            data={data} // Set the rows to be displayed
            //pages={this.state.pages} // Display the total number of pages
            loading={loading} // Display the loading overlay when we need it
            //onChange={this.fetchData} // Request new data when things change
            pageSize={25}
            style={theme}
          />
      </div>
    );
  }
}


/*

"id": 127,
      "version": 540,
      "name": "Lennar: Mission Hills Estates:03",
      "project": "Lennar: Mission Hills Estates",
      "simulationMonth": "3",
      "monthEnd": "2017-02-28",
      "projectMonth": "0",
      "landAcquisition": "0000",
      "improvement": "0.000",
      "builderImprovement": "0000",
      "lotsAvailableForSale": "125",
      "lotsDrawnDown": "0",
      "totalExposure": "0000",
      "costRemaining": "3375000",
      "maximumRevenue": "12937500.00",
      "sales": "0.00",
      "totalSales": "0.00",
      "deposit": "0.00",
      "totalDeposits": "1940625.00",
      "depositHurdle": "9703125.00",
      "returnOfDespoit": "0.00",
      "debtRepaymentRate": "0.60",
      "managementFee": "9375.00",
      "operatingIncome": "-9375.00",
      "fundingRequired": "9375.00",
      "netDistribution": "0.00",
      "unleveredCashFlow": "-9375.00",
      "debt": "5625.00",
      "investorCapital": "3750.00",
      "netRevenue": "0.00",
      "totalSources": "9375.00",
      "landAndImprovements": "0.00",
      "interestReserve": "0.00",
      "totalUses": "9375.00",
      "cashForDistribution": "0.00",
      "priorMonth": "Lennar: Mission Hills Estates:02",
      "finalMonth": false
*/

