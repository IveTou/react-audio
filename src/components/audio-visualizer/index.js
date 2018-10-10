import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import { withIndexStyle } from './styles';

//https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
//https://css-tricks.com/introduction-web-audio-api/
//https://www.creativebloq.com/netmag/how-manipulate-and-visualise-web-audio-91413066
//http://ianreah.com/2013/02/28/Real-time-analysis-of-streaming-audio-data-with-Web-Audio-API.html
//

export class AudioVisualizer extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.context = new (window.AudioContext || window.webkitAudioContext)();
    this.source = this.context.createOscillator();
    this.gain = this.context.createGain();
    this.analyser = this.context.createAnalyser();

    //configure source
    this.source.type = 'sine';
    this.source.frequency.value = 90;

    //connect source to gain and gain to destination 
    this.source.connect(this.gain);
    this.gain.connect(this.context.destination);

    //configure analyzer
    this.analyser.fftSize = 2048;

    //connect source to analyser
    this.source.connect(this.analyser);

    //set data buffer
    const bufferLength = this.analyser.frequencyBinCount;
    this.dataArray = new Uint8Array(bufferLength);
  }

  componentDidMount() {
    //start source
    this.source.start();
  }

  handleVolume(value) {
    const now = this.context.currentTime;
    this.gain.gain.setValueAtTime(value, now);
  }

  renderWaves() {
    requestAnimationFrame(this.renderWaves);
    this.analyser.getByteTimeDomainData(this.dataArray);
    console.log(this.dataArray)
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