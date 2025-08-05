/**
 * Media query breakpoints
 */
export const media = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1040,
  mobile: 696,
  mobileS: 400,
};

/**
 * Convert a px string (e.g., "16px") to a number
 */
export const pxToNum = (px) => Number(px.replace('px', ''));

/**
 * Convert a number to a px string (e.g., 16 → "16px")
 */
export const numToPx = (num) => `${num}px`;

/**
 * Convert pixels to rem (e.g., 16 → "1rem")
 * Improves accessibility scaling
 */
export const pxToRem = (px) => `${px / 16}rem`;

/**
 * Convert an ms string (e.g., "300ms") to a number
 */
export const msToNum = (ms) => Number(ms.replace('ms', ''));

/**
 * Convert a number to an ms string (e.g., 300 → "300ms")
 */
export const numToMs = (num) => `${num}ms`;

/**
 * Convert rgb string (e.g., "0 0 0") to normalized RGB array for Three.js
 */
export const rgbToThreeColor = (rgb) =>
  rgb?.split(' ').map((value) => Number(value) / 255) || [];

/**
 * Generate CSS custom properties from JS object.
 * Automatically formats numeric values based on property name.
 */
export function cssProps(props, style = {}) {
  const result = {};

  for (const [key, value] of Object.entries(props)) {
    let val = value;

    if (typeof val === 'number') {
      if (key === 'delay') {
        val = numToMs(val);
      } else if (key === 'opacity') {
        val = `${val * 100}%`;
      } else {
        val = numToPx(val);
      }
    }

    result[`--${key}`] = val;
  }

  return { ...result, ...style };
}

/**
 * Concatenate class names into a single string, ignoring falsy values
 */
export function classes(...args) {
  return args.filter(Boolean).join(' ');
}
