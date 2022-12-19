import styles from './Schedule.module.css'

function Schedule() {
    return (
        <div className={styles.container}>
            시간표
            <div className={styles.title}>
                <span className={styles.day}>월</span>
                <span className={styles.day}>화</span>
                <span className={styles.day}>수</span>
                <span className={styles.day}>목</span>
                <span className={styles.day}>금</span>
            </div>
            <div className={styles.subjects}>
                <div className={styles.mon}>
                    <div>Database 09:00 - 10:30</div>
                    <div>Distributed system 10:30 - 12:00</div>
                </div>
                <div className={styles.mon}>
                    <div>Database 10:30 - 12:00</div>
                    <div>Data structure 14:00 - 15:00</div>
                    <div>Data science 15:00 - 16:30</div>
                </div>
                <div className={styles.mon}>null</div>
                <div className={styles.mon}>
                    <div>Advanced programming 09:00 - 12:00</div>
                </div>
                <div className={styles.mon}>null</div>
            </div>
        </div>
    );
}

export default Schedule;