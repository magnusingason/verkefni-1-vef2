import {join} from 'path';
import {mkdir, writeFile, readFile, readdir, stat} from 'fs/promises';

import graymatter from 'gray-matter';
import {marked} from 'marked';

import {dataTemplate, makeHTML, makeScript} from './make-html.js';
import {parse} from './parser.js';

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
        if(info.isDirectory()){
            continue;
        }
        const data = await readFile(path);
        const str = data.toString('utf-8');

        const parsed = parse(str);

        var splitting = parsed.split("\n");
        
        for(let i = 0; i < splitting.length; i++){
            splitting[i] = splitting[i].replace(/\D/g,'');
        }
        
        splitting.pop();


        const html = makeHTML(splitting, number);
        
        dataInfo = dataInfo.concat(html);

        const scripts = makeScript(number, splitting);

        dataInfo = dataInfo.concat(scripts);
    }

    const template = dataTemplate(dataInfo, number);
    const newfile = join(OUTPUT_DIR, `index.html`);
    
    await writeFile(newfile, template, function(err, result) {
        if(err) console.log('error', err);
      });
}

main().catch((err) => console.error(err));