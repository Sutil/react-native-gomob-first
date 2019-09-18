import {darken, lighten} from 'polished';

const primary = '#49265c';
const secondary = '#ff8b0d';

export default {
  primary,
  primaryLight: lighten(0.1, primary),
  primaryDark: darken(0.1, primary),
  secondary,
};
