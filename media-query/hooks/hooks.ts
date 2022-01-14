import { useMediaQuery } from 'react-responsive';

/**
 * Hook will returns true if the browser window sizes is desktop only
 *
 * @returns boolean
 */
export function useMediaDesktop() {
  return useMediaQuery({ minWidth: 992 });
}

/**
 * Hook will returns true if the browser window sizes are tablet and desktop
 *
 * @returns boolean
 */
export function useMediaTabletDesktop() {
  return useMediaQuery({ minWidth: 768 });
}

/**
 * Hook will returns true if the browser window sizes is tablet only
 *
 * @returns boolean
 */
export function useMediaTablet() {
  return useMediaQuery({ minWidth: 768, maxWidth: 991 });
}

/**
 * Hook will returns true if the browser window sizes are mobile and tablet
 *
 * @returns boolean
 */
export function useMediaMobileTablet() {
  return useMediaQuery({ maxWidth: 991 });
}

/**
 * Hook will returns true if the browser window sizes is mobile only
 *
 * @returns boolean
 */
export function useMediaMobile() {
  return useMediaQuery({ maxWidth: 767 });
}
