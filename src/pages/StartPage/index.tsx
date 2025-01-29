import { FC } from 'react';

import styles from './StartPage.module.scss';
import Wave from '../../components/Wave';
import { Link } from 'react-router-dom';

const StartPage: FC = () => {
    return (
        <div className={styles.root}>
            <Wave />
            <div className={styles.start}>
                <div className={styles.header}>
                    <h1>Header</h1>
                </div>
                <Link to={'/menu1'} className={`${styles.menuBtn} ${styles.visible}`}>
                    <span>Menu</span>
                </Link>
            </div>
        </div>
    );
};

export default StartPage;
