import React, { FC } from 'react';
import {
  useMediaDesktop,
  useMediaTabletDesktop,
  useMediaTablet,
  useMediaMobileTablet,
  useMediaMobile,
} from '@nacasha/media-query.hooks';

/**
 * Show component if the browser window sizes is desktop only
 */
export const MediaDesktop: FC = ({ children }) => {
  const isMatch = useMediaDesktop();

  return <>{(isMatch && children) && children}</>;
};

/**
 * Show component if the browser window sizes are tablet and desktop
 */
export const MediaTabletDesktop: FC = ({ children }) => {
  const isMatch = useMediaTabletDesktop();

  return <>{(isMatch && children) && children}</>;
};

/**
 * Show component if the browser window sizes is tablet only
 */
export const MediaTablet: FC = ({ children }) => {
  const isMatch = useMediaTablet();

  return <>{(isMatch && children) && children}</>;
};

/**
 * Show component if the browser window sizes are mobile and tablet
 */
export const MediaMobileTablet: FC = ({ children }) => {
  const isMatch = useMediaMobileTablet();

  return <>{(isMatch && children) && children}</>;
};

/**
 * Show component if the browser window sizes is mobile only
 */
export const MediaMobile: FC = ({ children }) => {
  const isMatch = useMediaMobile();

  return <>{(isMatch && children) && children}</>;
};
