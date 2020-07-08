import { create } from '@storybook/theming/create';
import { getHexColor } from '../src/components/Colors'

export default create({
  base: 'dark',

  colorPrimary: getHexColor("Black"),
  colorSecondary: getHexColor("Light-Blue"),

//   // UI
  appBg: getHexColor("Black"),
  appContentBg: getHexColor("Black"),
  appBorderColor: getHexColor("Black"),
  appBorderRadius: 4,

  // Typography
  fontBase: 'Freight Text Medium',
  fontCode: 'monospace',

  // Text colors
  textColor: getHexColor("White"),
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: getHexColor("Black"),
  barSelectedColor: getHexColor("Black"),
  barBg: getHexColor("White"),

  // Form colors
  inputBg: getHexColor("White"),
  inputBorder: getHexColor("Black"),
  inputTextColor: getHexColor("Black"),
  inputBorderRadius: 4,

  brandTitle: 'Praxis custom theme',
  brandUrl: 'https://praxisinstitute.org',
  brandImage: 'https://praxisinstitute.org/wp-content/themes/expression-theme-child/images/logo-white.png',

});