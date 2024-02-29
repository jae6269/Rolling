import {
  beigeShadow,
  blueShadow,
  greenShadow,
  purpleShadow,
} from '../utils/imageImport';

const COLOR_MAPPINGS = {
  beige: 'var(--orange200)',
  purple: 'var(--purple200)',
  blue: 'var(--blue200)',
  green: 'var(--green200)',
};

const COLOR_IMAGES_MAPPINGS = {
  beige: beigeShadow,
  purple: purpleShadow,
  blue: blueShadow,
  green: greenShadow,
};

export { COLOR_MAPPINGS, COLOR_IMAGES_MAPPINGS };
