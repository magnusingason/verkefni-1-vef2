import {mean, variance, max, median, min, sd, sum, range} from '../src/the.math.functions.js';

describe('parser', () =>{

    it.only('test the mean function', () => {
        const input = [1,2,3];

        const val = mean(input);

        expect(val).toBe(2);
    });

    it.only('test the variance function', () => {
        const input = [1,2,3];

        const val = variance(input);


        expect(val).toBe(0.6666666666666666);
    });

    it.only('test the max function', () => {
        const input = [1,2,3];

        const val = max(input);


        expect(val).toBe(3);
    });

    it.only('test the median function', () => {
        const input = [1,2,3];

        const val = median(input);


        expect(val).toBe(2);
    });

    it.only('test the min function', () => {
        const input = [1,2,3];

        const val = min(input);


        expect(val).toBe(1);
    });

    it.only('test the sd function', () => {
        const input = [1,2,3];

        const val = sd(input);


        expect(val).toBe(0.816496580927726);
    });

    it.only('test the sum function', () => {
        const input = [1,2,3];

        const val = sum(input);


        expect(val).toBe(6);
    });

    it.only('test the range function', () => {
        const input = [1,2,3];

        const val = range(input);


        expect(val).toBe(2);
    });

    it.only('test if function recieves empty string', () => {
        const input = [];

        const val = range(input);


        expect(val).toBe(0);
    });
});