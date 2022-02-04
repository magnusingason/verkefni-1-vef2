import {marked} from 'marked';
import matter from 'gray-matter';

/**
 * 
 * @param {String } input Input markdown string
 * @returns {String} parsed markdown
 */

export function parse(input){
    const {
        content,
        data,
    } = matter(input);


    const parsed = marked.parse(content);
    return parsed
}