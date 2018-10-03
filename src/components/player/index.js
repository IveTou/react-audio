import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import classNames from 'classnames';
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

export class Player extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = { isPlaying: false, isVolumeOpen: false, volume: 50 };
  }

  playToggle() {
    this.setState({ isPlaying: !this.state.isPlaying }, () => {
      console.log(this.state.isPlaying);
    });
  }

  handleVolumeChange(event, volume) {
    this.setState({ volume }, () => {
      console.log(volume)
    });
  }

  handleVolumeClose() {
    this.setState({ isVolumeOpen: false }, () => {
      console.log(this.state.isVolumeOpen);
    });
  }

  handleVolumeOpen() {
    this.setState({ isVolumeOpen: true }, () => {
      console.log(this.state.isVolumeOpen);
    });
  }
  
  render() {
    const { classes } = this.props;
    const { isPlaying, isVolumeOpen, volume } = this.state;
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
          <div className={classes.controls}>
            <IconButton 
              aria-label="Play/pause"
              onClick={this.playToggle} 
              className={classes.playButton}
            >
              <Icon className={classes.playIcon}>{isPlaying ? 'pause' : 'play_arrow'}</Icon>
            </IconButton>
            <div
              className={classes.radioController} 
              onMouseEnter={this.handleVolumeOpen} 
              onMouseLeave={this.handleVolumeClose}
            >
              <IconButton 
                aria-label="volume"
                className={classes.playButton}
              >
                <Icon className={classes.playIcon}>volume_up</Icon>
              </IconButton>
              <Slider
                value={volume}
                aria-labelledby="label"
                className={sliderClass}
                onChange={this.handleVolumeChange}
              />
            </div>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image={cover}
          title={player}
        />
      </Card>
    );
  }
}

Player.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withIndexStyle(Player);