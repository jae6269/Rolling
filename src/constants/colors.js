import {
  beigeShadow,
  blueShadow,
  greenShadow,
  purpleShadow,
} from '../utils/imageImport';

// 배경컬러와 관련된 상수
// 페이지, 옵션등에서 사용
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
