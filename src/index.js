module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    } else {
        return matrix
            .map((array, index) => (index % 2 === 0 ? array : array.reverse()))
            .flat();
    }
};
