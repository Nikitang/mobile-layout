import './MenuOne.scss';

import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import downArrow from '../../assets/down-arrow.png';
import lArrow from '../../assets/next.png';
import { DataType } from '../../App';
import { readyArray } from '../../App';

type MenuOneProps = {
    items: Array<DataType>;
    index: number;
};

const MenuOne: FC<MenuOneProps> = ({ items, index }) => {
    const location = useLocation();
    const previousIndex = index - 1;
    const nextIndex = index + 1;
    const backPath = previousIndex === 0 ? '/' : `/menu${previousIndex}`;
    const nextPath = nextIndex <= readyArray.length ? `/menu${nextIndex}` : '/';
    console.log(location.pathname);

    return (
        <div className="layout">
            <div className="layout__header">
                <Link to={'/'} className="layout__header--lArrow">
                    <img src={downArrow} alt="" />
                </Link>
                <div className="layout__header--popup">
                    <span>Design and IT</span>
                    <img src={downArrow} alt="" />
                </div>
            </div>
            <div className="layout__body">
                <div className="layout__body--block-one">
                    <div className="item layout__body--block-one__item"></div>
                    <div className="item layout__body--block-one__item"></div>
                    <div className="item layout__body--block-one__item red-two">
                        <span>{items[0]?.name}</span>
                    </div>
                    <div className="item layout__body--block-one__item"></div>
                    <div className="item layout__body--block-one__item orange">
                        <span>{items[1]?.name}</span>
                    </div>
                </div>
                <div className="layout__body--block-two">
                    <div className="item layout__body--block-two__item"></div>
                    <div className="item layout__body--block-two__item">
                        <span>{items[2]?.name}</span>
                    </div>
                    <div className="item layout__body--block-two__item green">
                        <span>{items[3]?.name}</span>
                    </div>
                    <div className="item layout__body--block-two__item"></div>
                    <div className="item layout__body--block-two__item"></div>
                </div>
                <div className="layout__body--block-three">
                    <div className="item layout__body--block-three__item red-one">
                        <span>{items[4]?.name}</span>
                    </div>
                    <div className="item layout__body--block-three__item">
                        <span>{items[5]?.name}</span>
                    </div>
                    <div className="item layout__body--block-three__item blue">
                        <span>{items[6]?.name}</span>
                    </div>
                </div>
                <div className="layout__body--block-four">
                    <div className="item layout__body--block-four__item">
                        <span>{items[7]?.name}</span>
                    </div>
                    <div className="item layout__body--block-four__item"></div>
                    <div className="item layout__body--block-four__item"></div>
                </div>
            </div>
            <div className="layout__footer">
                {location.pathname === '/menu1' ? null : (
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
    );
};

export default MenuOne;
