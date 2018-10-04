import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import classNames from 'classnames';
import AudioVisualizer from '../audio-visualizer';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Icon, 
  IconButton,
  Typography, 
} from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';

import { withIndexStyle } from './styles';

const songInfo = {
  title: 'Lambadão nas estrelas',
  artist: 'Kaoma',
  cover: 'https://scontent.fssa8-1.fna.fbcdn.net/v/t1.0-9/21766499_10214276467216428_6330074394834461592_n.jpg?_nc_cat=111&oh=635cbf8fa83387fa30edb20a13113347&oe=5C59D919',
  player: 'joão nery', 
}
//https://codepen.io/nfj525/pen/rVBaab
//https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API

export class Player extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = { 
      isPlaying: false, 
      isVolumeOpen: false, 
      currentVolume: 50, 
      mute: false, 
    };
  }

  playToggle() {
    this.setState({ isPlaying: !this.state.isPlaying });
  }

  muteToggle() {
    this.setState({ mute: !this.state.mute }, () => {
      this.setState({ 
        currentVolume: this.state.currentVolume ? 0 : this.state.lastVolume  
      });
    });
  }

  handleVolumeChange(event, currentVolume) {
    this.setState({ currentVolume, lastVolume: currentVolume, mute: !currentVolume });
  }

  handleVolumeClose() {
    this.setState({ isVolumeOpen: false });
  }

  handleVolumeOpen() {
    this.setState({ isVolumeOpen: true });
  }
  
  render() {
    const { classes } = this.props;
    const { isPlaying, isVolumeOpen, currentVolume, mute } = this.state;
    const { title, artist, cover, player } = songInfo;
    const sliderClass = classNames(classes.slider, isVolumeOpen && classes.sliderOpen);

    return(
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h2" variant="headline">
              {title}
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              {artist}
            </Typography>
          </CardContent>

          <AudioVisualizer />

          <div className={classes.controls}>
            <IconButton 
              aria-label="Play/pause"
              onClick={this.playToggle} 
              className={classes.button}
            >
              <Icon className={classes.icon}>{isPlaying ? 'pause' : 'play_arrow'}</Icon>
            </IconButton>
            <div
              className={classes.radioController} 
              onMouseEnter={this.handleVolumeOpen} 
              onMouseLeave={this.handleVolumeClose}
            >
              <IconButton 
                aria-label="volume"
                className={classes.button}
                onClick={this.muteToggle}
              >
                <Icon className={classes.icon}>{mute ? 'volume_off' : 'volume_up'}</Icon>
              </IconButton>
              <Slider
                disabled={mute}
                value={currentVolume}
                aria-labelledby="label"
                className={sliderClass}
                onChange={this.handleVolumeChange}
              />
            </div>
          </div>
        </div>
        {cover && (
          <CardMedia
            className={classes.cover}
            image={cover}
            title={player}
          />
        )}
      </Card>
    );
  }
}

Player.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    artist: PropTypes.string,
    cover: PropTypes.string,
    player: PropTypes.string,
};
  
export default withIndexStyle(Player);