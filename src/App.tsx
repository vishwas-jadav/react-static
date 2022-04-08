import React from 'react';
import styles from './App.module.scss';
import Content from './components/Blocks/Content/Content';
import Header from './components/Blocks/Header';

const App: React.FC<{}> = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Content />
    </div>
  );
};

export default App;
