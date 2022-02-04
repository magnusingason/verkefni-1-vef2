import {join} from 'path';
import {writeFile, readFile, readdir, stat} from 'fs/promises';

import graymatter from 'gray-matter';
import {marked} from 'marked';

import {dataTemplate, makeHTML, makeScript} from './make-html.js';
import {parse} from './parser.js';
import { mkdir } from 'fs';

const DATA_DIR = './data';
const OUTPUT_DIR = './dist';

async function direxistst(dir){
    try{
        const info = await stat(dir);
        return info.isDirectory();
    } catch (e){
        return false;
    }
}

async function main() {
    const files = await readdir(DATA_DIR);
    
    if (!(await direxistst(OUTPUT_DIR))){
        await mkdir(OUTPUT_DIR);
    }

    let dataInfo = '';

    for (const file of files){
        var pieces = file.split('\\');
        var filename = pieces[pieces.length-1];
        var splitted = filename.split('.');
        var number = splitted[splitted.length-2];
        const path = join (DATA_DIR, file);
        const info = await stat(path);
        //console.log('object :>> ', path);
        //console.log('info :>> ', info.isDirectory());
        if(info.isDirectory()){
            continue;
        }
        const data = await readFile(path);
        //console.log('data :>> ', data);
        const str = data.toString('utf-8');
        //console.log('str :>> ', str);

        const parsed = parse(str);
        //console.log('parsed :>> ', parsed);

        var splitting = parsed.split("\n");
        
        for(let i = 0; i < splitting.length; i++){
            splitting[i] = splitting[i].replace(/\D/g,'');
        }
        
        splitting.pop();

        console.log(splitting);

        const html = makeHTML(splitting, number);
        //console.log('html :>> ', html);
        
        dataInfo = dataInfo.concat(html);

        const scripts = makeScript(number, splitting);

        dataInfo = dataInfo.concat(scripts);
        //console.log(dataInfo);
        /*
        const template = dataTemplate(html, number);
        //console.log('data :>> ', template);
        const newfile = join(OUTPUT_DIR, `${number}.html`);
        
        await writeFile(newfile, template);
        */
    }
    //console.log(dataInfo);

    const template = dataTemplate(dataInfo, number);
    //console.log('data :>> ', template);
    const newfile = join(OUTPUT_DIR, `index.html`);
    
    await writeFile(newfile, template);
    //consts index = makeIndex(dataInfo);
}

main().catch((err) => console.error(err));