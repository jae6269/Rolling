import React from 'react';
import { prevArrow, nextArrow } from '../../../utils/imageImport';

export const NextArrow = ({ className, style, onClick }) => (
  <button
    type="button"
    className={`${className} custom-arrow`}
    style={{ ...style, display: 'block', background: 'none', border: 'none' }}
    onClick={onClick}
    aria-label="Next"
  >
    <img src={nextArrow} alt="Next" />
  </button>
);

export const PrevArrow = ({ className, style, onClick }) => (
  <button
    type="button"
    className={`${className} custom-arrow`}
    style={{ ...style, display: 'block', background: 'none', border: 'none' }}
    onClick={onClick}
    aria-label="Previous"
  >
    <img src={prevArrow} alt="Prev" />
  </button>
);
