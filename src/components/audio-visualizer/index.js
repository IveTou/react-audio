import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import { withIndexStyle } from './styles';

export class AudioVisualizer extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.analyser = new (window.AudioContext || window.webkitAudioContext)().createAnalyser();
    this.analyser.fftSize = 2048;
    const bufferLength = this.analyser.frequencyBinCount;
    this.dataArray = new Uint8Array(bufferLength);
  }

  componentDidMount() {
  }

  renderWaves() {
    const drawVisual = requestAnimationFrame(this.renderWaves);
    this.analyser.getByteTimeDomainData(this.dataArray);
    //Write draw function here
    console.log(this.dataArray);
    //console.log(drawVisual);
  }

  render() {
    this.renderWaves();
    return(
      <div>
        WAVES
      </div>
    );
  }
}

AudioVisualizer.propTypes = {
  classes: PropTypes.object,
};
  
export default withIndexStyle(AudioVisualizer);