import { DataType } from '../App';
export const arrayFilling = (arr: Array<DataType>) => {
    const newArr = [...arr];
    const emptyKeys = {
        id: 0,
        name: '',
        description: '',
    };

    for (let i = 0; newArr.length < 8; i++) {
        newArr.push(emptyKeys);
    }
    return newArr;
};
