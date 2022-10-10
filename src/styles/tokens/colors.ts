import {
  blackA,
  blue,
  blueDark,
  slate,
  slateDark,
  cyan,
  cyanDark,
  red,
  redDark,
  whiteA,
} from '@radix-ui/colors';

export type ColorCategoryTypes = 'primary' | 'secondary' | 'natural' | 'danger';

export type PaletteTypes = {
  [key in ColorCategoryTypes]: {
    [key in string]: string;
  };
};

import { ThemeTypes } from 'styles/stitches.config';

const themes: { [key in ThemeTypes]: PaletteTypes } = {
  light: {
    primary: blue,
    secondary: cyan,
    natural: slate,
    danger: red,
  },
  dark: {
    primary: blueDark,
    secondary: cyanDark,
    natural: slateDark,
    danger: redDark,
  },
};

const makePalette = (theme: ThemeTypes) => {
  const palette = themes[theme];

  const primary = {
    'primary-01': palette.primary.blue1,
    'primary-02': palette.primary.blue2,
    'primary-03': palette.primary.blue3,
    'primary-04': palette.primary.blue4,
    'primary-05': palette.primary.blue5,
    'primary-06': palette.primary.blue6,
    'primary-07': palette.primary.blue7,
    'primary-08': palette.primary.blue8,
    'primary-09': palette.primary.blue9,
    'primary-10': palette.primary.blue10,
    'primary-11': palette.primary.blue11,
    'primary-12': palette.primary.blue12,
  };

  const secondary = {
    'secondary-01': palette.secondary.cyan1,
    'secondary-02': palette.secondary.cyan2,
    'secondary-03': palette.secondary.cyan3,
    'secondary-04': palette.secondary.cyan4,
    'secondary-05': palette.secondary.cyan5,
    'secondary-06': palette.secondary.cyan6,
    'secondary-07': palette.secondary.cyan7,
    'secondary-08': palette.secondary.cyan8,
    'secondary-09': palette.secondary.cyan9,
    'secondary-10': palette.secondary.cyan10,
    'secondary-11': palette.secondary.cyan11,
    'secondary-12': palette.secondary.cyan12,
  };

  const base = {
    'black-01': blackA.blackA1,
    'black-02': blackA.blackA2,
    'black-03': blackA.blackA3,
    'black-04': blackA.blackA4,
    'black-05': blackA.blackA5,
    'black-06': blackA.blackA6,
    'black-07': blackA.blackA7,
    'black-08': blackA.blackA8,
    'black-09': blackA.blackA9,
    'black-10': blackA.blackA10,
    'black-11': blackA.blackA11,
    'black-12': blackA.blackA12,

    'white-01': whiteA.whiteA1,
    'white-02': whiteA.whiteA2,
    'white-03': whiteA.whiteA3,
    'white-04': whiteA.whiteA4,
    'white-05': whiteA.whiteA5,
    'white-06': whiteA.whiteA6,
    'white-07': whiteA.whiteA7,
    'white-08': whiteA.whiteA8,
    'white-09': whiteA.whiteA9,
    'white-10': whiteA.whiteA10,
    'white-11': whiteA.whiteA11,
    'white-12': whiteA.whiteA12,
  };

  const text = {
    'text-contrast-high': palette.natural.slate12,
    'text-contrast-low': palette.natural.slate11,
    'text-black': blackA.blackA12,
    'text-white': whiteA.whiteA12,
  };

  const natural = {
    'natural-01': palette.natural.slate1,
    'natural-02': palette.natural.slate2,
    'natural-03': palette.natural.slate3,
    'natural-04': palette.natural.slate4,
    'natural-05': palette.natural.slate5,
    'natural-06': palette.natural.slate6,
    'natural-07': palette.natural.slate7,
    'natural-08': palette.natural.slate8,
    'natural-09': palette.natural.slate9,
    'natural-10': palette.natural.slate10,
    'natural-11': palette.natural.slate11,
    'natural-12': palette.natural.slate12,
  };

  const semantic = {
    'semantic-danger-01': palette.danger.red1,
    'semantic-danger-02': palette.danger.red2,
    'semantic-danger-03': palette.danger.red3,
    'semantic-danger-04': palette.danger.red4,
    'semantic-danger-05': palette.danger.red5,
    'semantic-danger-06': palette.danger.red6,
    'semantic-danger-07': palette.danger.red7,
    'semantic-danger-08': palette.danger.red8,
    'semantic-danger-09': palette.danger.red9,
    'semantic-danger-10': palette.danger.red10,
    'semantic-danger-11': palette.danger.red11,
    'semantic-danger-12': palette.danger.red12,
  };

  return {
    ...base,
    ...natural,
    ...primary,
    ...secondary,
    ...text,
    ...semantic,
  };
};

export const colors = {
  dark: makePalette('dark'),
  light: makePalette('light'),
};
