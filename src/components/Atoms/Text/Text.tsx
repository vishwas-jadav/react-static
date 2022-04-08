import classNames from 'classnames';
import React from 'react';
import styles from './Text.module.scss';

export type TextTypes = 'Heading' | 'Title' | 'SubHeading' | 'Body';
export type TextColors = 'White' | 'Blue' | 'Grey';

export type TextProps = {
  type?: TextTypes;
  value?: string;
  className?: string;
  color?: TextColors;
};

export const defaultProps = {
  type: 'Title',
  color: 'White',
} as TextProps;

const Text: React.FC<TextProps> = ({
  type,
  value,
  className,
  color,
}) => {
  const currentStyle = styles[`text${type}${color}`];
  let valueView;

  switch (type) {
    case 'Heading':
      valueView = (
        <p className={styles.value}>
          {value}
        </p>
      );
      break;

    case 'Title': {
      valueView = (
        <h1 className={styles.value}>
          {value}
        </h1>
      );
      break;
    }
  }
  return (
    <div className={classNames(currentStyle, className)}>
      {valueView}
    </div>
  );
};

Text.defaultProps = defaultProps;

export default Text;