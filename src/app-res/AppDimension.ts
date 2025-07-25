/**
 * Created by Vishnu on 08/07/2022.
 */

import {Dimensions, Platform} from 'react-native';
import { OperatingSystemType } from '../utils/enums';

// Precalculate Device Dimensions for better performance
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

// Calculating ratio from iPhone breakpoints
const tx = x <= 320 ? 0.75 : 0.875
const ratioX = x <= 375 ? tx : 1;
const ty = y <= 480 ? 0.75 : 0.875;
const ratioY = y <= 568 ? ty : 1;

// We set our base font size value
const base_unit = 16;

const base_ratio_y = 0.0625;

const base_ratio_x = 0.0625;

// We add an em() shortcut function
function em(value: number) {
  return Number((value * (base_unit * ratioX)).toFixed(2));
}

function emX(value: number) {
  return Number((value * (base_unit * ratioX)).toFixed(2));
}

// We add an em() shortcut function
function emY(value: number) {
  return Number((value * (base_unit * ratioY)).toFixed(2));
}

function isPlatformIOS() {
  return Platform.OS === OperatingSystemType.IOS;
}

// Then we set our styles with the help of the em() function
const AppDimension = {
  //RATIO

  RATION_X: ratioX,
  RATION_Y: ratioY,

  // GENERAL
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  PADDING: em(1.25),

  // CARD
  COMMONWIDTH: x * 0.9,
  PARENTWIDTH: x * 0.85,
  SPACING_X: em(1.875),
  SPACING_X_0p5: emY(base_ratio_y * 0.5),
  SPACING_X_0p58: emY(base_ratio_y * 0.58),
  SPACING_X_0P7: emY(base_ratio_y * 0.7),
  SPACING_X_0p7: emY(base_ratio_x * 0.7),
  SPACING_X_0P72: emY(base_ratio_y * 0.72),
  SPACING_X_0p8: emY(base_ratio_y * 0.8),
  SPACING_X_0p96: emY(base_ratio_y * 0.96),
  SPACING_X_01: emX(base_ratio_x),
  SPACING_X_01P3: emX(base_ratio_x * 1.3),
  SPACING_X_01P4: emX(base_ratio_x * 1.4),
  SPACING_X_02: emX(base_ratio_x * 2),
  SPACING_X_02P3: emX(base_ratio_x * 2.3),
  SPACING_X_2p5: emX(base_ratio_x * 2.5),
  SPACING_X_03: emX(base_ratio_x * 3),
  SPACING_X_03P2: emX(base_ratio_x * 3.2),
  SPACING_X_03P4: emX(base_ratio_x * 3.4),
  SPACING_X_04: emX(base_ratio_x * 4),
  SPACING_X_04P3: emX(base_ratio_x * 4.3),
  SPACING_X_04P7: emX(base_ratio_x * 4.7),
  SPACING_X_05: emX(base_ratio_x * 5),
  SPACING_X_05P3: emX(base_ratio_x * 5.3),
  SPACING_X_05P7: emX(base_ratio_x * 5.7),
  SPACING_X_06: emX(base_ratio_x * 6),
  SPACING_X_06P3: emX(base_ratio_x * 6.3),
  SPACING_X_07: emX(base_ratio_x * 7),
  SPACING_X_07P7: emX(base_ratio_x * 7.7),
  SPACING_X_07P3: emX(base_ratio_x * 7.3),
  SPACING_X_08: emX(base_ratio_x * 8),
  SPACING_X_08P3: emX(base_ratio_x * 8.3),
  SPACING_X_08P6: emX(base_ratio_x * 8.6),
  SPACING_X_09: emX(base_ratio_x * 9),
  SPACING_X_09P3: emX(base_ratio_x * 9.3),
  SPACING_X_09P6: emX(base_ratio_x * 9.6),
  SPACING_X_09P7: emX(base_ratio_x * 9.7),
  SPACING_X_10: emX(base_ratio_x * 10),
  SPACING_X_10P3: emX(base_ratio_x * 10.3),
  SPACING_X_10P7: emX(base_ratio_x * 10.7),

  SPACING_X_11: emX(base_ratio_x * 11),
  SPACING_X_11P3: emX(base_ratio_x * 11.3),
  SPACING_X_11P4: emX(base_ratio_x * 11.4),
  SPACING_X_11P7: emX(base_ratio_x * 11.7),
  SPACING_X_12: emX(base_ratio_x * 12),
  SPACING_X_12P3: emX(base_ratio_x * 12.3),
  SPACING_X_12P7: emX(base_ratio_x * 12.7),
  SPACING_X_13: emX(base_ratio_x * 13),
  SPACING_X_13P3: emX(base_ratio_x * 13.3),
  SPACING_X_13P5: emX(base_ratio_x * 13.5),
  SPACING_X_13P7: emX(base_ratio_x * 13.7),
  SPACING_X_14: emX(base_ratio_x * 14),
  SPACING_X_14P3: emX(base_ratio_x * 14.3),
  SPACING_X_14P4: emX(base_ratio_x * 14.4),
  SPACING_X_14P7: emX(base_ratio_x * 14.7),
  SPACING_X_15: emX(base_ratio_x * 15),
  SPACING_X_15P3: emX(base_ratio_x * 15.3),
  SPACING_X_15P7: emX(base_ratio_x * 15.7),
  SPACING_X_16: emX(base_ratio_x * 16),
  SPACING_X_16P3: emX(base_ratio_x * 16.3),
  SPACING_X_16P7: emX(base_ratio_x * 16.7),
  SPACING_X_17: emX(base_ratio_x * 17),
  SPACING_X_17P3: emX(base_ratio_x * 17.3),
  SPACING_X_17P7: emX(base_ratio_x * 17.7),
  SPACING_X_18: emX(base_ratio_x * 18),
  SPACING_X_18P3: emX(base_ratio_x * 18.3),
  SPACING_X_18P7: emX(base_ratio_x * 18.7),
  SPACING_X_19: emX(base_ratio_x * 19),
  SPACING_X_19P2: emX(base_ratio_x * 19.2),
  SPACING_X_19P7: emX(base_ratio_x * 19.7),
  SPACING_X_20: emX(base_ratio_x * 20),
  SPACING_X_20P3: emX(base_ratio_x * 20.3),

  SPACING_X_21: emX(base_ratio_x * 21),
  SPACING_X_21P3: emX(base_ratio_x * 21.3),
  SPACING_X_21P7: emX(base_ratio_x * 21.7),
  SPACING_X_22: emX(base_ratio_x * 22),
  SPACING_X_22P3: emX(base_ratio_x * 22.3),
  SPACING_X_22P7: emX(base_ratio_x * 22.7),
  SPACING_X_23: emX(base_ratio_x * 23),
  SPACING_X_23P3: emX(base_ratio_x * 23.3),
  SPACING_X_23P7: emX(base_ratio_x * 23.7),
  SPACING_X_24P3: emX(base_ratio_x * 24.3),
  SPACING_X_24: emX(base_ratio_x * 24),
  SPACING_X_24P7: emX(base_ratio_x * 24.7),
  SPACING_X_25: emX(base_ratio_x * 25),
  SPACING_X_25P7: emX(base_ratio_x * 25.7),
  SPACING_X_26: emX(base_ratio_x * 26),
  SPACING_X_26P3: emX(base_ratio_x * 26.3),
  SPACING_X_27: emX(base_ratio_x * 27),
  SPACING_X_27P3: emX(base_ratio_x * 27.3),
  SPACING_X_27P7: emX(base_ratio_x * 27.7),
  SPACING_X_28: emX(base_ratio_x * 28),
  SPACING_X_28P7: emX(base_ratio_x * 28.7),
  SPACING_X_29: emX(base_ratio_x * 29),
  SPACING_X_29P3: emX(base_ratio_x * 29.3),
  SPACING_X_29P7: emX(base_ratio_x * 29.7),
  SPACING_X_30: emX(base_ratio_x * 30),
  SPACING_X_30P3: emX(base_ratio_x * 30.3),
  SPACING_X_30P6: emX(base_ratio_x * 30.6),

  SPACING_X_31: emX(base_ratio_x * 31),
  SPACING_X_31P3: emX(base_ratio_x * 31.3),
  SPACING_X_31P7: emX(base_ratio_x * 31.7),
  SPACING_X_32: emX(base_ratio_x * 32),
  SPACING_X_32P3: emX(base_ratio_x * 32.3),
  SPACING_X_33: emX(base_ratio_x * 33),
  SPACING_X_33P3: emX(base_ratio_x * 33.3),
  SPACING_X_34: emX(base_ratio_x * 34),
  SPACING_X_35: emX(base_ratio_x * 35),
  SPACING_X_36: emX(base_ratio_x * 36),
  SPACING_X_36P7: emX(base_ratio_x * 36.7),
  SPACING_X_37: emX(base_ratio_x * 37),
  SPACING_X_37P3: emX(base_ratio_x * 37.3),
  SPACING_X_38: emX(base_ratio_x * 38),
  SPACING_X_38P3: emX(base_ratio_x * 38.3),
  SPACING_X_38P7: emX(base_ratio_x * 38.7),
  SPACING_X_39: emX(base_ratio_x * 39),
  SPACING_X_40: emX(base_ratio_x * 40),
  SPACING_X_41: emX(base_ratio_x * 41),
  SPACING_X_41P3: emX(base_ratio_x * 41.3),
  SPACING_X_42: emX(base_ratio_x * 42),
  SPACING_X_42P3: emX(base_ratio_x * 42.3),
  SPACING_X_43: emX(base_ratio_x * 43),
  SPACING_X_43P4: emX(base_ratio_x * 43.4),
  SPACING_X_44: emX(base_ratio_x * 44),
  SPACING_X_43P7: emX(base_ratio_x * 43.7),

  SPACING_X_45: emX(base_ratio_x * 45),
  SPACING_X_45P7: emX(base_ratio_x * 45.7),
  SPACING_X_46: emX(base_ratio_x * 46),
  SPACING_X_46P3: emX(base_ratio_x * 46.3),
  SPACING_X_46P7: emX(base_ratio_x * 46.7),
  SPACING_X_47: emX(base_ratio_x * 47),
  SPACING_X_47P3: emX(base_ratio_x * 47.3),
  SPACING_X_48: emX(base_ratio_x * 48),
  SPACING_X_48P3: emX(base_ratio_x * 48.3),
  SPACING_X_48P7: emX(base_ratio_x * 48.7),
  SPACING_X_49: emX(base_ratio_x * 49),
  SPACING_X_49P5: emX(base_ratio_x * 49.5),
  SPACING_X_49P7: emX(base_ratio_x * 49.7),
  SPACING_X_50: emX(base_ratio_x * 50),
  SPACING_X_53: emX(base_ratio_x * 53),
  SPACING_X_53p7: emX(base_ratio_x * 53.7),
  SPACING_X_56: emX(base_ratio_x * 56),
  SPACING_X_57P7: emX(base_ratio_x * 56.7),
  SPACING_X_50P3: emX(base_ratio_x * 50.3),
  SPACING_X_50P7: emX(base_ratio_x * 50.7),
  SPACING_X_51: emX(base_ratio_x * 51),
  SPACING_X_52: emX(base_ratio_x * 52),
  SPACING_X_54: emX(base_ratio_x * 54),
  SPACING_X_55: emX(base_ratio_x * 55),
  SPACING_X_58: emX(base_ratio_x * 58),
  SPACING_X_59: emX(base_ratio_x * 59),
  SPACING_X_60: emX(base_ratio_x * 60),
  SPACING_X_61: emX(base_ratio_x * 61),
  SPACING_X_64: emX(base_ratio_x * 64),
  SPACING_X_65: emX(base_ratio_x * 65),
  SPACING_X_66: emX(base_ratio_x * 66),
  SPACING_X_69: emX(base_ratio_x * 69),
  SPACING_X_70: emX(base_ratio_x * 70),
  SPACING_X_72: emX(base_ratio_x * 72),
  SPACING_X_73: emX(base_ratio_x * 73),
  SPACING_X_74: emX(base_ratio_x * 74),
  SPACING_X_75: emX(base_ratio_x * 75),
  SPACING_X_75P3: emX(base_ratio_x * 75.3),
  SPACING_X_77: emX(base_ratio_x * 77),
  SPACING_X_79: emX(base_ratio_x * 79),
  SPACING_X_80: emX(base_ratio_x * 80),
  SPACING_X_83P3: emX(base_ratio_x * 83.3),
  SPACING_X_85: emX(base_ratio_x * 85),
  SPACING_X_88: emX(base_ratio_x * 88),
  SPACING_X_82: emX(base_ratio_x * 82),
  SPACING_X_90: emX(base_ratio_x * 90),
  SPACING_X_91: emX(base_ratio_x * 91),
  SPACING_X_97: emX(base_ratio_x * 97),
  SPACING_X_100: emX(base_ratio_x * 100),
  SPACING_X_103: emX(base_ratio_x * 103),
  SPACING_X_105: emX(base_ratio_x * 105),
  SPACING_X_105P7: emX(base_ratio_x * 105.7),
  SPACING_X_106P3: emX(base_ratio_x * 106.3),
  SPACING_X_107P7: emX(base_ratio_x * 107.7),
  SPACING_X_110: emX(base_ratio_x * 110),
  SPACING_X_111: emX(base_ratio_x * 111),
  SPACING_X_113: emX(base_ratio_x * 113),
  SPACING_X_115: emX(base_ratio_x * 115),
  SPACING_X_120: emX(base_ratio_x * 120),
  SPACING_X_128: emX(base_ratio_x * 128),
  SPACING_X_130: emX(base_ratio_x * 130),
  SPACING_X_132: emX(base_ratio_x * 132),
  SPACING_X_135: emX(base_ratio_x * 135),
  SPACING_X_140: emX(base_ratio_x * 140),
  SPACING_X_141: emX(base_ratio_x * 141),
  SPACING_X_143: emX(base_ratio_x * 143),
  SPACING_X_143P7: emX(base_ratio_x * 143.7),
  SPACING_X_146: emX(base_ratio_x * 146),
  SPACING_X_150: emX(base_ratio_x * 150),
  SPACING_X_152: emX(base_ratio_x * 152),
  SPACING_X_150P7: emX(base_ratio_x * 150.7),
  SPACING_X_156: emY(base_ratio_x * 156),
  SPACING_X_158: emY(base_ratio_x * 158),
  SPACING_X_160: emY(base_ratio_x * 160),
  SPACING_X_170: emY(base_ratio_x * 170),
  SPACING_X_171: emY(base_ratio_x * 171),
  SPACING_X_177: emY(base_ratio_x * 177),
  SPACING_X_180: emY(base_ratio_x * 180),
  SPACING_X_184: emY(base_ratio_x * 184),
  SPACING_X_190: emY(base_ratio_x * 184),
  SPACING_X_193: emY(base_ratio_x * 193.3),
  SPACING_X_200: emY(base_ratio_x * 200),
  SPACING_X_202: emY(base_ratio_x * 202),
  SPACING_X_209: emY(base_ratio_x * 209),
  SPACING_X_206P7: emY(base_ratio_y * 206.7),
  SPACING_X_208: emY(base_ratio_y * 208),
  SPACING_X_210: emY(base_ratio_x * 210),
  SPACING_X_212: emY(base_ratio_y * 212),
  SPACING_X_220P7: emY(base_ratio_x * 220.7),
  SPACING_X_225: emY(base_ratio_y * 225),
  SPACING_X_227: emY(base_ratio_x * 227),
  SPACING_X_228: emY(base_ratio_y * 228),
  SPACING_X_230P7: emY(base_ratio_y * 230.7),
  SPACING_X_231: emY(base_ratio_y * 231),
  SPACING_X_240: emY(base_ratio_x * 240),
  SPACING_X_241: emY(base_ratio_x * 241),
  SPACING_X_246: emY(base_ratio_y * 246),
  SPACING_X_244: emY(base_ratio_x * 244),
  SPACING_X_250: emY(base_ratio_x * 250),
  SPACING_X_250P3: emY(base_ratio_y * 250.3),
  SPACING_X_250P7: emY(base_ratio_y * 250.7),
  SPACING_X_260: emY(base_ratio_x * 260),
  SPACING_X_270: emY(base_ratio_x * 270),
  SPACING_X_275: emY(base_ratio_x * 275),
  SPACING_X_280: emY(base_ratio_x * 280),
  SPACING_X_298: emY(base_ratio_y * 298),
  SPACING_X_293: emY(base_ratio_y * 293),
  SPACING_X_300: emY(base_ratio_x * 300),
  SPACING_X_305: emY(base_ratio_x * 305),
  SPACING_X_315: emY(base_ratio_x * 315),
  SPACING_X_325: emY(base_ratio_x * 325),
  SPACING_X_425: emY(base_ratio_x * 425),
  SPACING_X_500: emY(base_ratio_x * 500),

  SPACING_Y_0p5: emY(base_ratio_y * 0.5),
  SPACING_Y_01: emY(base_ratio_y),
  SPACING_Y_02: emY(base_ratio_y * 2),
  SPACING_Y_03: emY(base_ratio_y * 3),
  SPACING_Y_04: emY(base_ratio_y * 4),
  SPACING_Y_05: emY(base_ratio_y * 5),
  SPACING_Y_06: emY(base_ratio_y * 6),
  SPACING_Y_6p5: emY(base_ratio_y * 6.5),
  SPACING_Y_07: emY(base_ratio_y * 7),
  SPACING_Y_08: emY(base_ratio_y * 8),
  SPACING_Y_09: emY(base_ratio_y * 9),
  SPACING_Y_10: emY(base_ratio_y * 10),

  SPACING_Y_11: emY(base_ratio_y * 11),
  SPACING_Y_12: emY(base_ratio_y * 12),
  SPACING_Y_13: emY(base_ratio_y * 13),
  SPACING_Y_14: emY(base_ratio_y * 14),
  SPACING_Y_15: emY(base_ratio_y * 15),
  SPACING_Y_16: emY(base_ratio_y * 16),
  SPACING_Y_17: emY(base_ratio_y * 17),
  SPACING_Y_18: emY(base_ratio_y * 18),
  SPACING_Y_19: emY(base_ratio_y * 19),
  SPACING_Y_20: emY(base_ratio_y * 20),

  SPACING_Y_21: emY(base_ratio_y * 21),
  SPACING_Y_22: emY(base_ratio_y * 22),
  SPACING_Y_23: emY(base_ratio_y * 23),
  SPACING_Y_24: emY(base_ratio_y * 24),
  SPACING_Y_25: emY(base_ratio_y * 25),
  SPACING_Y_26: emY(base_ratio_y * 26),
  SPACING_Y_27: emY(base_ratio_y * 27),
  SPACING_Y_28: emY(base_ratio_y * 28),
  SPACING_Y_29: emY(base_ratio_y * 29),
  SPACING_Y_30: emY(base_ratio_y * 30),

  SPACING_Y_31: emY(base_ratio_y * 31),
  SPACING_Y_32: emY(base_ratio_y * 32),
  SPACING_Y_33: emY(base_ratio_y * 33),
  SPACING_Y_34: emY(base_ratio_y * 34),
  SPACING_Y_35: emY(base_ratio_y * 35),
  SPACING_Y_36: emY(base_ratio_y * 36),
  SPACING_Y_37: emY(base_ratio_y * 37),
  SPACING_Y_38: emY(base_ratio_y * 38),
  SPACING_Y_39: emY(base_ratio_y * 39),
  SPACING_Y_40: emY(base_ratio_y * 40),
  SPACING_Y_42: emY(base_ratio_y * 42),
  SPACING_Y_43: emY(base_ratio_y * 43),
  SPACING_Y_44: emY(base_ratio_y * 44),
  SPACING_Y_45: emY(base_ratio_y * 45),
  SPACING_Y_46: emY(base_ratio_y * 46),
  SPACING_Y_48: emY(base_ratio_y * 48),
  SPACING_Y_50: emY(base_ratio_y * 50),
  SPACING_Y_52: emY(base_ratio_y * 52),
  SPACING_Y_55: emY(base_ratio_y * 55),
  SPACING_Y_56: emY(base_ratio_y * 56),
  SPACING_Y_58: emY(base_ratio_y * 58),
  SPACING_Y_60: emY(base_ratio_y * 60),
  SPACING_Y_65: emY(base_ratio_y * 65),
  SPACING_Y_68: emY(base_ratio_y * 68),
  SPACING_Y_73: emY(base_ratio_y * 73),
  SPACING_Y_78: emY(base_ratio_y * 78),
  SPACING_Y_80: emY(base_ratio_y * 80),
  SPACING_Y_85: emY(base_ratio_y * 85),
  SPACING_Y_89: emY(base_ratio_y * 89),
  SPACING_Y_100: emY(base_ratio_y * 100),
  SPACING_Y_111: emY(base_ratio_y * 111),
  SPACING_Y_120: emY(base_ratio_y * 120),
  SPACING_Y_132: emY(base_ratio_y * 132),
  SPACING_Y_140: emY(base_ratio_y * 140),
  SPACING_Y_150: emY(base_ratio_y * 150),

  SPACING_Y_156: emY(base_ratio_y * 156),
  SPACING_Y_180: emY(base_ratio_y * 180),

  SPACING_Y_200: emY(base_ratio_y * 200),
  SPACING_Y_202: emY(base_ratio_y * 202),
  SPACING_Y_225: emY(base_ratio_y * 225),
  SPACING_Y_244: emY(base_ratio_y * 244),
  SPACING_Y_250: emY(base_ratio_y * 250),
  SPACING_Y_280: emY(base_ratio_y * 280),

  SPACING_Y_314: emY(base_ratio_y * 314),

  SPACING_Y_373: emY(base_ratio_y * 373),
  SPACING_Y_428: emY(base_ratio_y * 428),

  APP_DRAWER__WIDTH: emY(base_ratio_x * 300),
  APP_BOTTOM_NAV_HEIGHT: emY(base_ratio_x * 44),

  FONT_PADDING_TOP_DEFAULT: isPlatformIOS() ? emX(base_ratio_x * 5) : 0,
  FONT_PADDING_BOTTOM_DEFAULT: isPlatformIOS() ? 0 : emX(base_ratio_x * 5),
};

export default AppDimension;
