import './MenuTwo.scss';

import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import downArrow from '../../assets/down-arrow.png';
import lArrow from '../../assets/next.png';
import { DataType } from '../../App';
import { readyArray } from '../../App';
import { useDispatch } from 'react-redux';
import { addRoute, updateCart } from '../../redux/cartSlice/slice';
import { arrayFilling } from '../../utils/arrayFilling';

type MenuOneProps = {
    items: Array<DataType>;
    index: number;
};

const MenuTwo: FC<MenuOneProps> = ({ items, index }) => {
    const location = useLocation();
    const dispatch = useDispatch();

    const correctItems = arrayFilling(items);

    const previousIndex = index - 1;
    const nextIndex = index + 1;
    const backPath = previousIndex === 1 ? '/' : `/menu${previousIndex}`;
    const nextPath = nextIndex <= readyArray.length ? `/menu${nextIndex}` : '/';

    const pageLocation = location.pathname;

    const addToCart = (name: string, description: string, background: string, route: string) => {
        dispatch(updateCart({ name, description, background }));
        dispatch(addRoute({ route }));
    };

    return (
        <div className="layout-next">
            <div className="layout-next__header">
                <Link to={'/'} className="layout-next__header--lArrow">
                    <img src={downArrow} alt="" />
                </Link>
                <div className="layout-next__header--popup">
                    <span>Design and IT</span>
                    <img src={downArrow} alt="" />
                </div>
            </div>
            <div className="layout-next__body">
                <div className="layout-next__body--block-two">
                    <div className="item layout-next__body--block-two__item"></div>
                    <Link
                        to={`/cart/${correctItems[0].id}`}
                        onClick={() =>
                            addToCart(
                                correctItems[0].name,
                                correctItems[0].description,
                                '#fff',
                                pageLocation
                            )
                        }
                        className="item layout-next__body--block-two__item"
                    >
                        <span>{correctItems[0].name}</span>
                    </Link>
                    <Link
                        to={`/cart/${correctItems[1].id}`}
                        onClick={() =>
                            addToCart(
                                correctItems[1].name,
                                correctItems[1].description,
                                'rgb(70, 240, 240)',
                                pageLocation
                            )
                        }
                        className="item layout-next__body--block-two__item green"
                    >
                        <span>{correctItems[1].name}</span>
                    </Link>
                    <div className="item layout-next__body--block-two__item"></div>
                    <div className="item layout-next__body--block-two__item"></div>
                </div>

                <div className="layout-next__body--block-one">
                    <div className="item layout-next__body--block-one__item"></div>
                    <div className="item layout-next__body--block-one__item"></div>
                    <Link
                        to={`/cart/${correctItems[2].id}`}
                        onClick={() =>
                            addToCart(
                                correctItems[2].name,
                                correctItems[2].description,
                                '#ff5874',
                                pageLocation
                            )
                        }
                        className="item layout-next__body--block-one__item red-two"
                    >
                        <span>{correctItems[2].name}</span>
                    </Link>
                    <div className="item layout-next__body--block-one__item"></div>
                    <Link
                        to={`/cart/${correctItems[3].id}`}
                        onClick={() =>
                            addToCart(
                                correctItems[3].name,
                                correctItems[3].description,
                                'rgb(255, 165, 0)',
                                pageLocation
                            )
                        }
                        className="item layout-next__body--block-one__item orange"
                    >
                        <span>{correctItems[3].name}</span>
                    </Link>
                </div>

                <div className="layout-next__body--block-four">
                    <Link
                        to={`/cart/${correctItems[4].id}`}
                        onClick={() =>
                            addToCart(
                                correctItems[4].name,
                                correctItems[4].description,
                                '#fff',
                                pageLocation
                            )
                        }
                        className="item layout-next__body--block-four__item"
                    >
                        <span>{correctItems[4].name}</span>
                    </Link>
                    <div className="item layout-next__body--block-four__item"></div>
                    <div className="item layout-next__body--block-four__item"></div>
                </div>

                <div className="layout-next__body--block-three">
                    <Link
                        to={`/cart/${correctItems[5].id}`}
                        onClick={() =>
                            addToCart(
                                correctItems[5].name,
                                correctItems[5].description,
                                '#ff5874',
                                pageLocation
                            )
                        }
                        className="item layout-next__body--block-three__item red-one"
                    >
                        <span>{correctItems[5].name}</span>
                    </Link>
                    <Link
                        to={`/cart/${correctItems[6].id}`}
                        onClick={() =>
                            addToCart(
                                correctItems[6].name,
                                correctItems[6].description,
                                '#fff',
                                pageLocation
                            )
                        }
                        className="item layout-next__body--block-three__item"
                    >
                        <span>{correctItems[6].name}</span>
                    </Link>
                    <Link
                        to={`/cart/${correctItems[7].id}`}
                        onClick={() =>
                            addToCart(
                                correctItems[7].name,
                                correctItems[7].description,
                                'rgb(85, 148, 243)',
                                pageLocation
                            )
                        }
                        className="item layout-next__body--block-three__item blue"
                    >
                        <span>{correctItems[7].name}</span>
                    </Link>
                </div>
            </div>
            <div className="layout-next__footer">
                <Link to={backPath} className="layout-next__footer--arrow-back">
                    <img src={lArrow} alt="Back" />
                </Link>
                {nextPath === '/' ? null : (
                    <Link to={nextPath} className="layout-next__footer--arrow-next">
                        <img src={lArrow} alt="Next" />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default MenuTwo;
