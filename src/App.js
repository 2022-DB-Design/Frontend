import styles from './App.module.css'
import { useState } from 'react';
import Profile from './Profile.js'
import Board from './Board.js'
import Schedule from './Schedule.js'

function App() {
  const [selector, setSelector] = useState(1);
  return (
    <div className={styles.app}>
      <div className={styles.title}>Campuspal</div>
      <div className={styles.container}>
        <div className={styles.select}>
          <div className={styles.button} onClick={() => setSelector(1)}>프로필</div>
          <div className={styles.button} onClick={() => setSelector(2)}>게시판</div>
          <div className={styles.button} onClick={() => setSelector(3)}>시간표</div>
        </div>
        <div className={styles.contents}>
          {selector === 1? <Profile />: selector === 2? <Board />: <Schedule />}
        </div>
      </div>
    </div>
  );
}

export default App;
