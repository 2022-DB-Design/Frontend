import { useState } from 'react';
import styles from './Profile.module.css'

function Profile() {
    const [name, setName] = useState("NA");
    const [id, setId] = useState("NA");
    const [univ, setUniv] = useState("NA");
    const [major, setMajor] = useState("NA");
    return (  
        <div className={styles.App}>
            <div className={styles.container}>
                <div className={styles.con}>Name: {name}</div>
                <div className={styles.con}>ID: {id}</div>
                <div className={styles.con}>University: {univ}</div>
                <div className={styles.con}>Major: {major}</div>
            </div>
        </div>
        
    );
}

export default Profile;