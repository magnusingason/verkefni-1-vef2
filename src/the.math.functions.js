export function mean(array){
    if(!array.length){
        return 0;
    }else {
    var total = 0;
    for(var i = 0; i < array.length; i++){
        total += array[i];
    }
    var avg = total / array.length;
    return avg;
}}
export function variance(arr){
    if(!arr.length){
        return 0;
    }else {
     const sum = arr.reduce((acc, val) => acc + val);
     const { length: num } = arr;
     const median = sum / num;
     let variance = 0;
     arr.forEach(num => {
        variance += ((num - median) * (num - median));
     });
     variance /= num;
     return variance;
}}
export function max(arr){
    if(!arr.length){
        return 0;
    }else{
    const max = Math.max(...arr);
    return max;
}}
export function median(arr){
    if(!arr.length){
        return 0;
    }else {
    let middle = Math.floor(arr.length / 2);
    arr = [...arr].sort((a, b) => a - b);
    const median = arr.length % 2 !== 0 ? arr[middle] : (arr[middle - 1] + arr[middle]) / 2;
    return median
}}
export function min(arr){
    if(!arr.length){
        return 0;
    }else{
    const min = Math.min(...arr);
    return min;
}}
export function sd(arr){
    if(!arr.length){
        return 0;
    }else{
        const n = arr.length
        const mean = arr.reduce((a, b) => a + b) / n
        const sd = Math.sqrt(arr.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
        return sd;
}}
export function sum(arr){
    if(!arr.length){
        return 0;
    }else{
        const sum = arr.reduce((partialSum, a) => partialSum + a, 0);
        return sum
}}
export function range(arr){
    if(!arr.length){
        return 0;
    }else{
        arr.sort();
        const range = arr[arr.length - 1] - arr[0];
        return range
}}