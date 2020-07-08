import React from 'react';
import { storiesOf } from '@storybook/react';

import MediaSource from '.';
import PraxisLogo from '../../assets/icons/close.svg';

storiesOf('Source|Video', module)
  // .add('default', () => (
  //   <MediaSource
  //     source="https://www.radiantmediaplayer.com/media/bbb-360p.mp4"
  //     poster={PraxisLogo}
  //   />
  // ))
  .add('default with control', () => (
    <MediaSource
      source="https://www.radiantmediaplayer.com/media/bbb-360p.mp4"
      controls
      poster={PraxisLogo}
    />
  ))
  .add('default with youtube', () => (
    <MediaSource
      source="https://www.youtube.com/embed/ZNJifht0qOE"
      youtube
      controls
      width="500px"
      height="500px"
      poster={PraxisLogo}
    />
  ));
