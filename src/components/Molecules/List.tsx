import React from 'react';
import Text, { TextProps } from '../Atoms/Text';
import styles from './List.module.scss';

export type ListProps = {
  title?: TextProps;
  items?: TextProps[];
};

export const defaultListItemProps = {
  color: 'Grey',
  type: 'ListBody',
} as TextProps;

const List: React.FC<ListProps> = ({
  title,
  items,
}) => {
  const itemsView = items?.map((item, index) => {
    return (
      <li key={index} className={styles.listItem}>
        <Text {...item} />
      </li>
    );
  });
  return (
    <>
      <Text {...title} className={styles.title}  />
      <ul className={styles.listBlueDot}>
        {itemsView}
      </ul>
    </>
  );
};

export default List;