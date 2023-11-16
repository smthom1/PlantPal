import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Cursors_TypeGeneralStateOrStyl } from './Cursors_TypeGeneralStateOrStyl/Cursors_TypeGeneralStateOrStyl.js';
import classes from './Desktop3.module.css';
import { Ellipse3Icon } from './Ellipse3Icon.js';
import { Ellipse6Icon } from './Ellipse6Icon.js';
import { Ellipse7Icon } from './Ellipse7Icon.js';
import { Ellipse8Icon } from './Ellipse8Icon.js';
import { Ellipse9Icon } from './Ellipse9Icon.js';
import { UserIcon } from './UserIcon.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 15:262 */
export const Desktop3: FC<Props> = memo(function Desktop3(props = {}) {
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
      <div className={classes.rectangle11}></div>
      <div className={classes.pansyViolaTricolorVarHortensis}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label2}>Pansy </span>
          <span className={classes.label3}>(Viola tricolor var. hortensis)</span>
        </p>
      </div>
      <div className={classes.ellipse8}>
        <Ellipse8Icon className={classes.icon4} />
      </div>
      <div className={classes.ellipse7}>
        <Ellipse7Icon className={classes.icon5} />
      </div>
      <div className={classes.clickToLearnMore}>Click to learn more</div>
      <div className={classes.clickToLearnMore2}>Click to learn more</div>
      <div className={classes.snapdragonAntirrhinum}>
        <p className={classes.labelWrapper3}>
          <span className={classes.label4}>Snapdragon </span>
          <span className={classes.label5}>(Antirrhinum)</span>
        </p>
      </div>
      <div className={classes.fullSun320010000LuxPetSafeWate}>
        <ul className={classes.list}>
          <li>
            <div className={classes.textBlock12}>Full sun (32,000 - 100,000 lux) </div>
          </li>
          <li>
            <div className={classes.textBlock13}>Pet safe</div>
          </li>
          <li>
            <div className={classes.textBlock14}>Water weekly</div>
          </li>
        </ul>
      </div>
      <div className={classes.brightIndirectLight10009000Lux}>
        <ul className={classes.list2}>
          <li>
            <div className={classes.textBlock15}>Bright, indirect light (10,000 - 90,000 lux) </div>
          </li>
          <li>
            <div className={classes.textBlock16}>Pet safe</div>
          </li>
          <li>
            <div className={classes.textBlock17}>Mist frequently, bottom water every nine days</div>
          </li>
        </ul>
      </div>
      <div className={classes.polkaDotPlantHypoestesPhyllost}>
        <p className={classes.labelWrapper4}>
          <span className={classes.label6}>Polka Dot Plant </span>
          <span className={classes.label7}>(Hypoestes phyllostachya)</span>
        </p>
      </div>
      <div className={classes.brightIndirectLight10001200Lux}>
        <ul className={classes.list3}>
          <li>
            <div className={classes.textBlock18}>Bright, indirect light (10,000 - 12,000 lux) </div>
          </li>
          <li>
            <div className={classes.textBlock19}>Pet safe</div>
          </li>
          <li>
            <div className={classes.textBlock20}>Water once every two weeks</div>
          </li>
        </ul>
      </div>
      <div className={classes.clickToLearnMore3}>Click to learn more</div>
      <div className={classes.africanVioletsStreptocarpusSec}>
        <p className={classes.labelWrapper5}>
          <span className={classes.label8}>African Violets </span>
          <span className={classes.label9}>(Streptocarpus sect. Saintpaulia)</span>
        </p>
      </div>
      <div className={classes.ellipse3}>
        <Ellipse3Icon className={classes.icon6} />
      </div>
      <div className={classes.searchResults}>Search Results</div>
      <div className={classes.ellipse9}>
        <Ellipse9Icon className={classes.icon7} />
      </div>
    </div>
  );
});
