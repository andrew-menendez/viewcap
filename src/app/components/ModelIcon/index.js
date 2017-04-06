import React, { PropTypes } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import BankIcon from 'react-icons/lib/fa/bank';
import LeafIcon from 'react-icons/lib/fa/leaf';
import LaptopIcon from 'react-icons/lib/fa/laptop';
import Shuttle from 'react-icons/lib/fa/space-shuttle';
import Cubes from 'react-icons/lib/fa/cubes';
import Flags from 'react-icons/lib/fa/flag-checkered';

const iconSelect={
  '1':<BankIcon style={{'fontSize':'5em'}}/>,
  '2':<LeafIcon style={{'fontSize':'5em'}}/>,
  '3':<LaptopIcon style={{'fontSize':'5em'}}/>,
  '4':<Shuttle style={{'fontSize':'5em'}}/>,
  '5':<Cubes style={{'fontSize':'5em'}}/>,
  '6':<Flags style={{'fontSize':'5em'}}/>
}


const ModelIcon = ({ x,children, ...other }) => (
              <Row>
                <Col xs={12}>
                  <Row center="xs">
                    <Col xs={6}>
                      {iconSelect[x]}
                    </Col>
                  </Row>
                </Col>
              </Row>
);

ModelIcon.propTypes = {
  children: PropTypes.node
};

export default ModelIcon;