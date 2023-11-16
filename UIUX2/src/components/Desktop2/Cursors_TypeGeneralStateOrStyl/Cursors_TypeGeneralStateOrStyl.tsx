import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Cursors_TypeGeneralStateOrStyl.module.css';

interface Props {
  className?: string;
  classes?: {
    colorLayer?: string;
    root?: string;
  };
}
/* @figmaId 12:202 */
export const Cursors_TypeGeneralStateOrStyl: FC<Props> = memo(function Cursors_TypeGeneralStateOrStyl(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.colorLayer || ''} ${classes.colorLayer}`}></div>
    </div>
  );
});
