import React from 'react';
import List, { ListProps } from '../../Molecules/List';

export type ContentProps = {
  list?: ListProps;
};

const Content: React.FC<ContentProps> = ({
  list,
}) => {
  return (
    <List {...list} />
  );
};

export default Content;
