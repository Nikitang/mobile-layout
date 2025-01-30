import './App.scss';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MenuOne from './pages/MenuOne';
import MenuTwo from './pages/MenuTwo';
import data from './data/data';
import { chunkArray } from './utils/chunking';
import CheckItem from './pages/CheckItem';

import { selectCart } from './redux/cartSlice/selectors';

export type DataType = {
    id: number;
    name: string;
    description: string;
};

export const readyArray = chunkArray<DataType>(data);

const App: FC = () => {
    const carts = useSelector(selectCart);
    return (
        <Routes>
            <Route path={'/'} element={<MenuOne items={readyArray[0]} index={1} />} />
            {readyArray.slice(1).map((item, index) => (
                <Route
                    key={index + 1}
                    path={`/menu${index + 2}`}
                    element={
                        index % 2 === 0 ? (
                            <MenuTwo items={item} index={index + 2} />
                        ) : (
                            <MenuOne items={item} index={index + 2} />
                        )
                    }
                />
            ))}
            <Route path={'/cart/:id'} element={<CheckItem {...carts} />} />
        </Routes>
    );
};

export default App;
