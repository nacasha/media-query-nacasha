import React from 'react';

import './ui.composition.scss';

import {
  MediaDesktop,
  MediaMobile,
  MediaMobileTablet,
  MediaTablet,
  MediaTabletDesktop,
} from './ui';

export const Single = () => (
  <div>
    <MediaDesktop>
      <div className="ui-box-media-query">
        Desktop
      </div>
    </MediaDesktop>
    <MediaTablet>
      <div className="ui-box-media-query">
        Tablet
      </div>
    </MediaTablet>
    <MediaMobile>
      <div className="ui-box-media-query">
        Mobile
      </div>
    </MediaMobile>
  </div>
);

export const Multiple = () => (
  <div>
    <MediaTabletDesktop>
      <div className="ui-box-media-query">
        Tablet Desktop
      </div>
    </MediaTabletDesktop>
    <MediaMobileTablet>
      <div className="ui-box-media-query">
        Mobile Tablet
      </div>
    </MediaMobileTablet>

  </div>
);

export const All = () => (
  <div>
    <MediaDesktop>
      <div className="ui-box-media-query">
        Desktop
      </div>
    </MediaDesktop>
    <MediaTabletDesktop>
      <div className="ui-box-media-query">
        Tablet Desktop
      </div>
    </MediaTabletDesktop>
    <MediaTablet>
      <div className="ui-box-media-query">
        Tablet
      </div>
    </MediaTablet>
    <MediaMobileTablet>
      <div className="ui-box-media-query">
        Mobile Tablet
      </div>
    </MediaMobileTablet>
    <MediaMobile>
      <div className="ui-box-media-query">
        Mobile
      </div>
    </MediaMobile>
  </div>
);
