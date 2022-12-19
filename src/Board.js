import styles from './Board.module.css'
import { useState } from 'react';

function Board() {
    const [selector, setSelector] = useState(1);
    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                <div className={styles.row}>
                    <span className={styles.date}>날짜</span>
                    <span className={styles.title} style={{ textAlign: 'center' }}>제목</span>
                    <span className={styles.name}>글쓴이</span>
                </div>
                <div className={styles.row}>
                    <span className={styles.date}>12-19</span>
                    <span className={styles.title}>스터디 모집</span>
                    <span className={styles.name}>Kim</span>
                </div>
                <div className={styles.row}>
                    <span className={styles.date}>12-19</span>
                    <span className={styles.title}>토익 스터디원 모집중</span>
                    <span className={styles.name}>Lee</span>
                </div>
                <div className={styles.row}>
                    <span className={styles.date}>12-18</span>
                    <span className={styles.title}>웹 앱 프로젝트 스터디원 구합니다</span>
                    <span className={styles.name}>Lee</span>
                </div>
                <div className={styles.row}>
                    <span className={styles.date}>12-18</span>
                    <span className={styles.title}>토익 스터디 하고싶습니다</span>
                    <span className={styles.name}>Han</span>
                </div>

            </div>
            <div className={styles.select}>
                {selector === 1 ?
                    <div className={styles.selectedButton} onClick={() => setSelector(1)}>자유</div> :
                    <div className={styles.button} onClick={() => setSelector(1)}>자유</div>}
                {selector === 2 ?
                    <div className={styles.selectedButton} onClick={() => setSelector(2)}>공지</div> :
                    <div className={styles.button} onClick={() => setSelector(2)}>공지</div>}
                {selector === 3 ?
                    <div className={styles.selectedButton} onClick={() => setSelector(3)}>스터디</div> :
                    <div className={styles.button} onClick={() => setSelector(3)}>스터디</div>}
            </div>

        </div>
    );
}

export default Board;