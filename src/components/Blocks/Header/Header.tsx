import React from 'react';
import cx from 'classnames';
import styles from './Header.module.scss';
import Logo, { LogoProps } from '../../Atoms/Logo';
import Text, { TextProps } from '../../Atoms/Text';

export type HeaderProps = {
  className?: string;
  title?: TextProps;
  description?: TextProps;
  logo?: LogoProps;
};

export const defaultProps = {
  logo: {
    asset: 'WebIcon',
  } as LogoProps,
  title: {
    type: 'Title',
    color: 'Blue',
  } as TextProps,
  description: {
    type: 'Heading',
    color: 'Grey',
  } as TextProps,
};

const Header: React.FC<HeaderProps> = ({
  className,
  logo,
  title,
  description,
}) => {
  if (title && !title.value) {
    title.value = 'ReactFacts';
  }
  if (description && !description.value) {
    description.value = 'React Course - Project 1';
  }
  return (
    <div className={cx(className, styles.header)}>
      <Logo {...logo} className={styles.logo}/>
      <Text className={styles.title} {...title} />
      <Text className={styles.description} {...description} />
    </div>
  );
};

Header.defaultProps = defaultProps;

export default Header;