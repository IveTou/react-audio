import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import { withIndexStyle } from './styles';

export class AudioVisualizer extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    //const aa = 'a';
    //this.analyser =  new (window.AudioContext || window.webkitAudioContext)().createAnalyser();;
    //analyser.fftSize = 2048;
    //const bufferLength = analyser.frequencyBinCount;
    //this.dataArray = new Uint8Array(bufferLength);
  }

  render() {
    return(
      <div>
          TESTE
      </div>
    );
  }
}

AudioVisualizer.propTypes = {
  classes: PropTypes.object,
};
  
export default withIndexStyle(AudioVisualizer);