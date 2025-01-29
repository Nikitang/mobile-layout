export const chunkArray = <T>(array: Array<T>): Array<Array<T>> => {
    const result = [];
    for (let i = 0; i < array.length; i += 8) {
        result.push(array.slice(i, i + 8));
    }
    return result;
};
