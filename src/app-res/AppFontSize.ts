
import {Dimensions} from 'react-native';

// Pre-Calculate Device Dimensions for better performance
const x = Dimensions.get('window').width;

// Calculating ratio from iPhone breakpoints
const tX= x <= 320 ? 0.75 : 0.875;
const ratioX = x <= 375 ? tX : 1;

// We set our base font size value
const base_unit = 16;
const base_ratio_font = 0.0625;

// We add an em() shortcut function
function em(value: number) {
  return Number((value * (base_unit * ratioX)).toFixed(2));
}

// Then we set our styles with the help of the em() function
const AppFontSize = {
  // FONT SIZE
  FONT_SIZE_08: em(base_ratio_font * 8),
  FONT_SIZE_09: em(base_ratio_font * 9),
  FONT_SIZE_09P5: em(base_ratio_font * 9.5),
  FONT_SIZE_09P7: em(base_ratio_font * 9.7),
  FONT_SIZE_10: em(base_ratio_font * 10), // 10
  FONT_SIZE_11: em(base_ratio_font * 11), // 11
  FONT_SIZE_11p5: em(base_ratio_font * 11.5), // 11
  FONT_SIZE_12: em(base_ratio_font * 12), // 12
  FONT_SIZE_13: em(base_ratio_font * 13), // 13
  FONT_SIZE_13p3: em(base_ratio_font * 13.3), // 13
  FONT_SIZE_14: em(base_ratio_font * 14), // 14
  FONT_SIZE_14P3: em(base_ratio_font * 14.3), // 14
  FONT_SIZE_14P5: em(base_ratio_font * 14.5), //1.5
  FONT_SIZE_15: em(base_ratio_font * 15), //15
  FONT_SIZE_16: em(base_ratio_font * 16), //16
  FONT_SIZE_16p5: em(base_ratio_font * 16.5), //16.5
  FONT_SIZE_17P3: em(base_ratio_font * 17.3), //16.5
  FONT_SIZE_18: em(base_ratio_font * 18), //18
  FONT_SIZE_19P2: em(base_ratio_font * 19.2), //19.2
  FONT_SIZE_19P8: em(base_ratio_font * 19.8), //19.8
  FONT_SIZE_20: em(base_ratio_font * 20), //20
  FONT_SIZE_21: em(base_ratio_font * 21), //21
  FONT_SIZE_22: em(base_ratio_font * 22), //22
  FONT_SIZE_23: em(base_ratio_font * 23), //23
  FONT_SIZE_24: em(base_ratio_font * 24), //24
  FONT_SIZE_26: em(base_ratio_font * 26), //26
  FONT_SIZE_27: em(base_ratio_font * 27), //26
  FONT_SIZE_28: em(base_ratio_font * 28), //28
  FONT_SIZE_30: em(base_ratio_font * 30), //30
  FONT_SIZE_32: em(base_ratio_font * 32), //32
  FONT_SIZE_33: em(base_ratio_font * 33), //32
  FONT_SIZE_34: em(base_ratio_font * 34), //34
  FONT_SIZE_36: em(base_ratio_font * 36), //36
  FONT_SIZE_38: em(base_ratio_font * 38), //38
  FONT_SIZE_40: em(base_ratio_font * 40), //40
  FONT_SIZE_44: em(base_ratio_font * 44), //44
  FONT_SIZE_48: em(base_ratio_font * 48), //44

};

export default AppFontSize;
