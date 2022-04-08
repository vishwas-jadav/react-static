import React from 'react';
import cx from 'classnames';
import styles from './Logo.module.scss';
import Icon from '../../logo.svg';

export type LogoAssets = 'WebIcon';

export type LogoProps = {
  className?: string;
  asset?: LogoAssets;
};

const Logo: React.FC<LogoProps> = ({
  className,
  asset,
}) => {
  let src;
  switch (asset) {
    case 'WebIcon':
      src = Icon;
      break;
  
    default:
      src = Icon;
      break;
  }
  return (
  <img className={cx(className, styles.Logo)} src={src} alt='Logo' />
  );
};

export default Logo;