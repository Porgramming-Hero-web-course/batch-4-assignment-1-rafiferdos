{
  const sumArray = (arr: number[]): number => {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
    return sum;
  };
  sumArray([1, 2, 3, 4, 5]);
}
