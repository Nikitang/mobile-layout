import './MenuOne.scss';

import { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import downArrow from '../../assets/down-arrow.png';
import lArrow from '../../assets/next.png';
import { DataType } from '../../App';
import { readyArray } from '../../App';
import { addRoute, updateCart } from '../../redux/cartSlice/slice';

import Wave from '../../components/Wave';

import { arrayFilling } from '../../utils/arrayFilling';

type MenuOneProps = {
    items: Array<DataType>;
    index: number;
};

const MenuOne: FC<MenuOneProps> = ({ items, index }) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const [waveLoaded, setWaveLoaded] = useState(true);
    const [contentVisible, setContentVisible] = useState(false);

    const correctItems = arrayFilling(items);

    const previousIndex = index - 1;
    const nextIndex = index + 1;
    const backPath = previousIndex === 0 ? '/' : `/menu${previousIndex}`;
    const nextPath = nextIndex <= readyArray.length ? `/menu${nextIndex}` : '/';

    const addToCart = (name: string, description: string, background: string, route: string) => {
        dispatch(updateCart({ name, description, background }));
        dispatch(addRoute({ route }));
    };

    const pageLocation = location.pathname;

    useEffect(() => {
        const hasWaveLoaded = localStorage.getItem('waveLoaded');
        console.log(hasWaveLoaded);

        if (hasWaveLoaded) {
            setWaveLoaded(false);
            setContentVisible(true);
        } else {
            if (pageLocation !== '/') setWaveLoaded(false);
            setTimeout(() => {
                setContentVisible(true);
            }, 1700);
            setTimeout(() => {
                if (pageLocation === '/') setWaveLoaded(false);
                localStorage.setItem('waveLoaded', 'true');
            }, 2200);
        }

        const handleBeforeUnload = () => {
            localStorage.removeItem('waveLoaded');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [pageLocation]);

    console.log(pageLocation);

    return (
        <>
            {waveLoaded && <Wave />}
            {contentVisible && (
                <div
                    className="layout"
                    // style={{ background: `${contentVisible ? 'rgb(39, 10, 56)' : '#fff'}` }}
                >
                    <div className="layout__header">
                        <Link to={'/'} className="layout__header--lArrow">
                            <img src={downArrow} alt="" />
                        </Link>
                        <div className="layout__header--popup">
                            <span>TR</span>
                            <img src={downArrow} alt="" />
                        </div>
                    </div>
                    <div className="layout__body">
                        <div className="layout__body--block-one">
                            <div className="item layout__body--block-one__item"></div>
                            <div className="item layout__body--block-one__item"></div>
                            <Link
                                to={`/cart/${correctItems[0].id}`}
                                onClick={() =>
                                    addToCart(
                                        correctItems[0].name,
                                        correctItems[0].description,
                                        '#ff5874',
                                        pageLocation
                                    )
                                }
                                className="item layout__body--block-one__item red-two"
                            >
                                <span>{correctItems[0].name}</span>
                            </Link>
                            <div className="item layout__body--block-one__item"></div>
                            <Link
                                to={`/cart/${correctItems[1].id}`}
                                onClick={() =>
                                    addToCart(
                                        correctItems[1].name,
                                        correctItems[1].description,
                                        'rgb(255, 165, 0)',
                                        pageLocation
                                    )
                                }
                                className="item layout__body--block-one__item orange"
                            >
                                <span>{correctItems[1].name}</span>
                            </Link>
                        </div>
                        <div className="layout__body--block-two">
                            <div className="item layout__body--block-two__item"></div>
                            <Link
                                to={`/cart/${correctItems[2].id}`}
                                onClick={() =>
                                    addToCart(
                                        correctItems[2].name,
                                        correctItems[2].description,
                                        '#fff',
                                        pageLocation
                                    )
                                }
                                className="item layout__body--block-two__item"
                            >
                                <span>{correctItems[2].name}</span>
                            </Link>
                            <Link
                                to={`/cart/${correctItems[3].id}`}
                                onClick={() =>
                                    addToCart(
                                        correctItems[3].name,
                                        correctItems[3].description,
                                        'rgb(70, 240, 240)',
                                        pageLocation
                                    )
                                }
                                className="item layout__body--block-two__item green"
                            >
                                <span>{correctItems[3].name}</span>
                            </Link>
                            <div className="item layout__body--block-two__item"></div>
                            <div className="item layout__body--block-two__item"></div>
                        </div>
                        <div className="layout__body--block-three">
                            <Link
                                to={`/cart/${correctItems[4].id}`}
                                onClick={() =>
                                    addToCart(
                                        correctItems[4].name,
                                        correctItems[4].description,
                                        '#ff5874',
                                        pageLocation
                                    )
                                }
                                className="item layout__body--block-three__item red-one"
                            >
                                <span>{correctItems[4].name}</span>
                            </Link>
                            <Link
                                to={`/cart/${correctItems[5].id}`}
                                onClick={() =>
                                    addToCart(
                                        correctItems[5].name,
                                        correctItems[5].description,
                                        '#fff',
                                        pageLocation
                                    )
                                }
                                className="item layout__body--block-three__item"
                            >
                                <span>{correctItems[5].name}</span>
                            </Link>
                            <Link
                                to={`/cart/${correctItems[6].id}`}
                                onClick={() =>
                                    addToCart(
                                        correctItems[6].name,
                                        correctItems[6].description,
                                        'rgb(85, 148, 243)',
                                        pageLocation
                                    )
                                }
                                className="item layout__body--block-three__item blue"
                            >
                                <span>{correctItems[6].name}</span>
                            </Link>
                        </div>
                        <div className="layout__body--block-four">
                            <Link
                                to={`/cart/${correctItems[7].id}`}
                                onClick={() =>
                                    addToCart(
                                        correctItems[7].name,
                                        correctItems[7].description,
                                        '#fff',
                                        pageLocation
                                    )
                                }
                                className="item layout__body--block-four__item"
                            >
                                <span>{correctItems[7].name}</span>
                            </Link>
                            <div className="item layout__body--block-four__item"></div>
                            <div className="item layout__body--block-four__item"></div>
                        </div>
                    </div>
                    <div className="layout__footer">
                        {location.pathname === '/' ? null : (
                            <Link to={backPath} className="layout__footer--arrow-back">
                                <img src={lArrow} alt="Back" />
                            </Link>
                        )}

                        {nextPath === '/' ? null : (
                            <Link to={nextPath} className="layout__footer--arrow-next">
                                <img src={lArrow} alt="Next" />
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default MenuOne;
