import './MenuTwo.scss';

import { FC } from 'react';
import { Link } from 'react-router-dom';

import downArrow from '../../assets/down-arrow.png';
import lArrow from '../../assets/next.png';
import { DataType } from '../../App';
import { readyArray } from '../../App';

type MenuOneProps = {
    items: Array<DataType>;
    index: number;
};

const MenuTwo: FC<MenuOneProps> = ({ items, index }) => {
    const previousIndex = index - 1;
    const nextIndex = index + 1;
    const backPath = previousIndex === 0 ? '/' : `/menu${previousIndex}`;
    const nextPath = nextIndex <= readyArray.length ? `/menu${nextIndex}` : '/';
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
                    <div className="item layout-next__body--block-two__item">
                        <span>{items[0].name ?? 'item'}</span>
                    </div>
                    <div className="item layout-next__body--block-two__item green">
                        <span>{items[1].name ?? 'item'}</span>
                    </div>
                    <div className="item layout-next__body--block-two__item"></div>
                    <div className="item layout-next__body--block-two__item"></div>
                </div>
                <div className="layout-next__body--block-one">
                    <div className="item layout-next__body--block-one__item"></div>
                    <div className="item layout-next__body--block-one__item"></div>
                    <div className="item layout-next__body--block-one__item red-two">
                        <span>{items[2].name ?? 'item'}</span>
                    </div>
                    <div className="item layout-next__body--block-one__item"></div>
                    <div className="item layout-next__body--block-one__item orange">
                        <span>{items[3].name ?? 'item'}</span>
                    </div>
                </div>
                <div className="layout-next__body--block-four">
                    <div className="item layout-next__body--block-four__item">
                        <span>{items[4].name ?? 'item'}</span>
                    </div>
                    <div className="item layout-next__body--block-four__item"></div>
                    <div className="item layout-next__body--block-four__item"></div>
                </div>
                <div className="layout-next__body--block-three">
                    <div className="item layout-next__body--block-three__item red-one">
                        <span>{items[5].name ?? 'item'}</span>
                    </div>
                    <div className="item layout-next__body--block-three__item">
                        <span>{items[6].name ?? 'item'}</span>
                    </div>
                    <div className="item layout-next__body--block-three__item blue">
                        <span>{items[7].name ?? 'item'}</span>
                    </div>
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
