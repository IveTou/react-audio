import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import { withIndexStyle } from './styles';

export class Instascrapper extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
 
  render() {
    return(  
      <div></div>
    );
  }
}

Instascrapper.propTypes = {
};
  
export default withIndexStyle(Instascrapper);