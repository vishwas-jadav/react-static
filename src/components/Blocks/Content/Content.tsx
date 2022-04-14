import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextProps } from '../../Atoms/Text';
import List, { defaultListItemProps, ListProps } from '../../Molecules/List';
import styles from './Content.module.scss';

export type ContentProps = {
  list?: ListProps;
};

export const defaultProps = {
  title: {
    color: 'White',
    type: 'Title',
  },
} as ListProps;

const Content: React.FC<ContentProps> = ({
  list,
}) => {
  const { t } = useTranslation();
  if (!list) {
    list = defaultProps;
    list.title = {
      ...defaultProps.title,
      value: t('content.title'),
    };
    const listItems: TextProps[] = [];
    for (let index = 1; index <= 5; index++) {
      listItems.push({
        ...defaultListItemProps,
        value: t(`reactFeatures.feature${index}`),
      });
    }
    list.items = listItems;
  }
  return (
    <div className={styles.content}>
      <List {...list} />
    </div>
  );
};

export default Content;
