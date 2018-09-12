import { lighten, darken, rgba } from 'polished';

const sizeBase = 8;
const fontSizeBase = 16;
const grayBase = '#000';
const linkColor = '#007272';
const fontFamilySansSerif =
  'Hiragino Kaku Gothic ProN, Roboto, Droid Sans, Meiryo, Verdana, sans-serif';

const theme = {
  grayBase,
  linkColor,
  grayDarker: lighten('13.5%', grayBase),
  grayDark: lighten('20%', grayBase),
  gray: lighten('40%', grayBase),
  grayDarkLight: lighten('59%', grayBase),
  grayLight: lighten('70%', grayBase),
  grayMoreLight: lighten('85%', grayBase),
  grayLighter: lighten('93%', grayBase),
  brandPrimary: '#007f48',
  brandSecondary: rgba(110, 185, 44, 1),
  brandSuccess: '#5cb85c',
  brandInfo: '#5bc0de',
  brandWarning: '#f0ad4e',
  brandDanger: '#f41c00',
  white: rgba(255, 255, 255, 1),
  borderColor: rgba(200, 200, 200, 1),
  blue: '#007AFF',
  subColorBlue: '#008e99',
  subColorSky: '#00d5e5',
  subColorSkyLight: '#89DFE5',
  subColorPink: '#cc0070',
  accentColorRed: '#e50000',
  subColorBlueLight: '#DAF0F2',
  fontColorGrayDark: '#333333',
  fontColorGrayLight: '#666666',
  headerColor: '#FFFBE8',
  sizeBase: `${sizeBase}px`,
  sizeBaseHalf: `${Math.ceil(sizeBase / 2)}px`,
  sizeBaseQuarter: `${Math.ceil(sizeBase / 4)}px`,
  sizeBaseIconKerning: `${Math.ceil(sizeBase / 1.5)}px`,
  bodyBg: '#fff',
  textColor: '$gray-dark',
  subTextColor: '$gray',
  linkHoverColor: darken('15%', linkColor),
  linkHoverDecoration: 'underline',
  fontFamilySansSerif:
    'Hiragino Kaku Gothic ProN, Roboto, Droid Sans, Meiryo, Verdana, sans-serif',
  fontFamilySerif: 'Georgia, Times New Roman, Times, serif',
  fontFamilyMonospace: 'Menlo, Monaco, Consolas, Courier New, monospace',
  fontFamily: fontFamilySansSerif,
  fontSizeBase: `${fontSizeBase}px`,
  fontSizeLarge: `${Math.ceil(fontSizeBase * 1.15)}px`,
  fontSizeHuge: `${Math.ceil(fontSizeBase * 1.25)}px`,
  fontSizeMiddle: `${Math.ceil(fontSizeBase * 0.85)}px`,
  fontSizeSmall: `${Math.ceil(fontSizeBase * 0.75)}px`,
  lineHeightBase: 1.428571429,
  paddingBaseVertical: '6px',
  paddingBaseHorizontal: '12px',
  borderRadius: '3px',
  modalSize: '300px',
  appNoPostBaseMargin: `${sizeBase * 3} 0 0`,
};

export default theme;
