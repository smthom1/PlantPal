import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop1.module.css';
import { IconArea1Icon2 } from './IconArea1Icon2.js';
import { IconArea1Icon } from './IconArea1Icon.js';
import { IconArea2Icon } from './IconArea2Icon.js';
import { LoginButtonIcon2 } from './LoginButtonIcon2.js';
import { LoginButtonIcon3 } from './LoginButtonIcon3.js';
import { LoginButtonIcon4 } from './LoginButtonIcon4.js';
import { LoginButtonIcon } from './LoginButtonIcon.js';
import { SubtractIcon } from './SubtractIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 3:2 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.darkBackground}></div>
      <div className={classes.loginButton}>
        <LoginButtonIcon className={classes.icon} />
      </div>
      <div className={classes.loginButton2}>
        <LoginButtonIcon2 className={classes.icon2} />
      </div>
      <div className={classes.loginButton3}>
        <LoginButtonIcon3 className={classes.icon3} />
      </div>
      <div className={classes.loginButton4}>
        <LoginButtonIcon4 className={classes.icon4} />
      </div>
      <div className={classes.login}>Login</div>
      <div className={classes.createAccount}>Create Account</div>
      <div className={classes.PleaseEnterYourUsername}>Please enter your username and passcode</div>
      <div className={classes.plantPal}>PlantPal</div>
      <div className={classes.welcomeTo}>Welcome to</div>
      <div className={classes.subtract}>
        <SubtractIcon className={classes.icon5} />
      </div>
      <div className={classes.frame138}>
        <div className={classes.iconArea1}>
          <IconArea1Icon className={classes.icon6} />
        </div>
        <div className={classes.textArea}>Password</div>
        <div className={classes.iconArea2}>
          <IconArea2Icon className={classes.icon7} />
        </div>
      </div>
      <div className={classes.frame139}>
        <div className={classes.iconArea12}>
          <IconArea1Icon2 className={classes.icon8} />
        </div>
        <div className={classes.textArea2}>Username</div>
      </div>
    </div>
  );
});
