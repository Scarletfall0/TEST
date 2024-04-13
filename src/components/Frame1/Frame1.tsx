import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Frame1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const Frame1: FC<Props> = memo(function Frame1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.wowza}>wowza</div>
      <div className={classes._1351}></div>
    </div>
  );
});
