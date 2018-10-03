import { withStyles } from '@material-ui/core/';
import { deepOrange } from '@material-ui/core/colors/';

export const withIndexStyle = withStyles(theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1px 0 auto',
    textAlign: 'initial',
  },
  cover: {
    width: theme.spacing.unit * 19,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playButton: {
    '&:hover': {
      color: deepOrange[300],
    }
  },
  playIcon: {
    height: theme.spacing.unit * 4,
    width: theme.spacing.unit * 4,
    fontSize: theme.spacing.unit * 4,
  },
  radioController: {
    display: 'contents',
  },
  slider: {
    width: '0%',
    transition: 'width 500ms, opacity 100ms 520ms',
    opacity: 0,
  },
  sliderOpen: {
    width: '100%',
    transition: 'width 500ms',
    opacity: '1',
  },
}));
