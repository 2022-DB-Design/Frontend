import { useState } from 'react';
import styles from './Profile.module.css'

function Profile() {
    const [name, setName] = useState("Kim");
    const [id, setId] = useState("kjh1234");
    const [univ, setUniv] = useState("Dankook");
    const [major, setMajor] = useState("Computer");
    const [nick, setNick] = useState("kim");
    return (
        <div className={styles.App}>
            <div className={styles.container}>
                <div className={styles.con}>Name: {name}</div>
                <div className={styles.con}>ID: {id}</div>
                <div className={styles.con}>University: {univ}</div>
                <div className={styles.con}>Major: {major}</div>
                <div className={styles.con}>NickName: {nick}</div>
            </div>
        </div>

    );
}

export default Profile;