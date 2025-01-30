import React, { FC } from 'react';

import styles from './CheckItem.module.scss';

import { InitState, InitStateTypes } from '../../redux/cartSlice/types';

import lArrow from '../../assets/down-arrow.png';
import { Link } from 'react-router-dom';

const CheckItem: FC<InitState> = ({ name, description, background, route }) => {
    return (
        <div className={styles.root}>
            <div className={styles.backgroundFill} style={{ background: background }}></div>
            <div
                className={styles.cart}
                style={{
                    background: 'rgb(39, 10, 56)',
                }}
            >
                <div className={styles.header}>
                    <Link to={`${route}`} className={styles.link}>
                        <img
                            src={lArrow}
                            alt=""
                            style={{
                                filter: `${background === '#fff' ? 'invert(0)' : 'invert(1)'}`,
                            }}
                        />
                    </Link>
                    <h1
                        className={styles.h1}
                        style={{ color: `${background === '#fff' ? '#000' : ''}` }}
                    >
                        {name}
                    </h1>
                </div>
                <div className={styles.body}>
                    <h2
                        className={styles.h2}
                        style={{ color: `${background === '#fff' ? '#000' : ''}` }}
                    >
                        {description}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default CheckItem;
