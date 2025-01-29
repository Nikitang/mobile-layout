import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import styles from './Wave.module.scss';

const Wave = () => {
    const waveRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        gsap.to(`.${styles.wave}`, {
            x: -500,
            duration: 1,
            ease: 'back',
            // repeat: 5,
            stagger: 0.1,
            rotation: 180,
            onComplete: () => {
                if (waveRef.current) {
                    waveRef.current.style.opacity = '0';
                }
                setTimeout(() => {
                    if (waveRef.current) {
                        waveRef.current.style.display = 'none';
                    }
                }, 3000);
            },
        });
    }, []);

    return (
        <div ref={waveRef} className={styles.waveContainer}>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
        </div>
    );
};

export default Wave;
