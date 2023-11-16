import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Cursors_TypeGeneralStateOrStyl } from './Cursors_TypeGeneralStateOrStyl/Cursors_TypeGeneralStateOrStyl.js';
import classes from './Desktop2.module.css';
import { Ellipse6Icon } from './Ellipse6Icon.js';
import { UserIcon } from './UserIcon.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 9:37 */
export const Desktop2: FC<Props> = memo(function Desktop2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.darkBackground}></div>
      <div className={classes.helloSam}>Hello, Sam</div>
      <div className={classes.uploadDifferentCSVFile}>Upload different CSV file</div>
      <div className={classes.fillInDetails}>Fill in details</div>
      <div className={classes.nameSeasonWateringSoilTypeMain}>
        <div className={classes.textBlock}>Name</div>
        <div className={classes.textBlock2}>Season</div>
        <div className={classes.textBlock3}>Watering</div>
        <div className={classes.textBlock4}>Soil Type</div>
        <div className={classes.textBlock5}>Maintenance</div>
        <div className={classes.textBlock6}>Light level</div>
        <div className={classes.textBlock7}>
          <p></p>
        </div>
        <div className={classes.textBlock8}>Personal Notes</div>
        <div className={classes.textBlock9}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>(keywords)</span>
          </p>
        </div>
      </div>
      <div className={classes.scientificCommon}>
        <div className={classes.textBlock10}>Scientific</div>
        <div className={classes.textBlock11}>Common</div>
      </div>
      <div className={classes.profile}>
        <div className={classes.user}>
          <UserIcon className={classes.icon} />
        </div>
        <div className={classes.profile2}>Profile</div>
        <div className={classes.frame140}></div>
      </div>
      <div className={classes.rectangle1}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes.ellipse6}>
        <Ellipse6Icon className={classes.icon2} />
      </div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon3} />
      </div>
      <div className={classes.rectangle3}></div>
      <div className={classes.rectangle5}></div>
      <div className={classes.low}>Low</div>
      <div className={classes.rectangle4}></div>
      <div className={classes.summer}>Summer</div>
      <div className={classes.rectangle6}></div>
      <div className={classes.rectangle7}></div>
      <div className={classes.rectangle8}></div>
      <div className={classes.high}>High</div>
      <div className={classes.rectangle9}></div>
      <div className={classes.rectangle10}></div>
      <div className={classes.low2}>Low</div>
      <div className={classes.safeForPetsPurpleAn}>Safe for pets, purple an</div>
      <Cursors_TypeGeneralStateOrStyl className={classes.cursors} classes={{ colorLayer: classes.colorLayer }} />
      <div className={classes.search}>Search</div>
    </div>
  );
});
