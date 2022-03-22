import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import Header from './components/Header';

const App: React.FC<{}> = () => {
  return (
    <div className={styles.App}>
      <Header>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to reload.
        </p>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Header>
    </div>
  );
};

export default App;
