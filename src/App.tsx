import React from 'react';
import styles from './App.module.scss';
import Content from './components/Blocks/Content/Content';
import Header from './components/Blocks/Header';
import LocaleProvider from './modules/locale/LocaleProvider';

const App: React.FC<{}> = () => {
  return (
    <LocaleProvider>
      <div className={styles.App}>
        <Header className={styles.header} />
        <Content />
      </div>
    </LocaleProvider>
  );
};

export default App;
