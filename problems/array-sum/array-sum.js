function array_sum(input) {
    let sum = 0;
    const strArray = input.toString();
    const splitArray = strArray.split(",");
    splitArray.forEach((element) => {
        sum = sum + Number(element);
    });
    return sum;
}
const array = [1, 2, [3, [3, 4, 5, 6], 4, [5, [1, 2]]]];

console.log(array_sum(array));
