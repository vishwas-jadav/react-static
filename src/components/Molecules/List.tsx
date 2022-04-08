import React from 'react';
import Text, { TextProps } from '../Atoms/Text';
import styles from './List.module.scss';

export type ListProps = {
  title?: TextProps;
  items?: TextProps[];
};

const List: React.FC<ListProps> = ({
  title,
  items,
}) => {
  const itemsView = items?.map((item, index) => {
    return (
      <li key={index}>
        <Text {...item} />
      </li>
    );
  });
  return (
    <>
      <Text {...title}  />
      <ul className={styles.listBlueDot}>
        {itemsView}
      </ul>
    </>
  );
};

export default List;