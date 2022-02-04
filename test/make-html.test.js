import {describe, expect, it} from '@jest/globals';
import {parse} from '../src/parser';

describe.skip('parser', () =>{
    it.only('creates a html string', () => {
        const input = '';

        const parsed = parse(input);
        console.log('object :>> ', parsed);

        expect(parsed).toBe('<h1 id="hello-world">hello world</h1>');
    });
});