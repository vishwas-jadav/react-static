import React from 'react';
import cx from 'classnames';
import styles from './Header.module.scss';
import Logo, { LogoProps } from '../Logo';
import Text, { TextProps } from '../Text/Text';

export type HeaderProps = {
  className?: string;
  text?: TextProps;
  logo?: LogoProps;
};

export const defaultProps = {
  logo: {
    asset: 'WebIcon',
  } as LogoProps,
  text: {
    type: 'Title',
    color: 'Blue',
  } as TextProps,
};

const Header: React.FC<HeaderProps> = ({
  className,
  logo,
  text,
}) => {
  if (text) {
    text.value = 'ReactFacts';
  }
  return (
    <div className={cx(className, styles.header)}>
      <Logo {...logo} className={styles.logo}/>
      <Text {...text} />
    </div>
  );
};

Header.defaultProps = defaultProps;

export default Header;