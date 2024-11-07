const removeDuplicates = (arr: number[]): number[] => {
    const uniqueArray = arr.filter((item, index) => arr.indexOf(item) === index);
    console.log(uniqueArray);
    return uniqueArray;
};
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);