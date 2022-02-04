export function makeHTML(html, nr){
    
    const template = `
    <section>
    <div>
    <p>these are the numbers for txt file ${nr} </p>
    </div>
    <p>
    ${html}
    </p>
    <div class="buttons">
    <button onclick="variance${nr}([${html}])">variance</button>
    <button onclick="max${nr}([${html}])">max</button>
    <button onclick="mean${nr}([${html}])">mean</button>
    <button onclick="median${nr}([${html}])">median</button>
    <button onclick="min${nr}([${html}])">min</button>
    <button onclick="sd${nr}([${html}])">sd</button>
    <button onclick="sum${nr}([${html}])">sum</button>
    <button onclick="range${nr}([${html}])">range</button>
    </div>
    <p id="text${nr}"> This text will display what statistcs you choose.</p>
    </section>`;
    return template;
}

export function makeScript(nr){
    return `
    <script>
    function mean${nr}(array){
        if(!array.length){
            document.getElementById("text${nr}").innerHTML = "there were no numbers in this text file";
        }else {
        var total = 0;
        for(var i = 0; i < array.length; i++){
            total += array[i];
        }
        var avg = total / array.length;
        if(!isNaN(avg)){
        document.getElementById("text${nr}").innerHTML = avg;
        }else{
        document.getElementById("text${nr}").innerHTML = "this didnt work";
    }}
    }
    function variance${nr}(arr){
        if(!arr.length){
            document.getElementById("text${nr}").innerHTML = "there were no numbers in this text file";
        }else {
         const sum = arr.reduce((acc, val) => acc + val);
         const { length: num } = arr;
         const median = sum / num;
         let variance = 0;
         arr.forEach(num => {
            variance += ((num - median) * (num - median));
         });
         variance /= num;
         if(!isNaN(variance)){
            document.getElementById("text${nr}").innerHTML = variance;
        }else{
            document.getElementById("text${nr}").innerHTML = "this didnt work";}
    }}
    function max${nr}(arr){
        if(!arr.length){
            document.getElementById("text${nr}").innerHTML = "there were no numbers in this text file";
        }else{
        const max = Math.max(...arr);
        if(!isNaN(max)){
            document.getElementById("text${nr}").innerHTML = max;
        }else{
            document.getElementById("text${nr}").innerHTML = "this didnt work";}
    }}
    function median${nr}(arr){
        if(!arr.length){
            document.getElementById("text${nr}").innerHTML = "there were no numbers in this text file";
        }else {
        let middle = Math.floor(arr.length / 2);
        arr = [...arr].sort((a, b) => a - b);
        const median = arr.length % 2 !== 0 ? arr[middle] : (arr[middle - 1] + arr[middle]) / 2;
        if(!isNaN(median)){
            document.getElementById("text${nr}").innerHTML = median;
        }else{
            document.getElementById("text${nr}").innerHTML = "this didnt work";}
    }}
    function min${nr}(arr){
        if(!arr.length){
            document.getElementById("text${nr}").innerHTML = "there were no numbers in this text file";
        }else{
        const min = Math.min(...arr);
        if(!isNaN(min)){
            document.getElementById("text${nr}").innerHTML = min;
        }else{
            document.getElementById("text${nr}").innerHTML = "this didnt work";}
    }}
    function sd${nr}(arr){
        if(!arr.length){
            document.getElementById("text${nr}").innerHTML = "there were no numbers in this text file";
        }else{
            const n = arr.length
            const mean = arr.reduce((a, b) => a + b) / n
            const sd = Math.sqrt(arr.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
            if(!isNaN(sd)){
                document.getElementById("text${nr}").innerHTML = sd;
            }else{
                document.getElementById("text${nr}").innerHTML = "this didnt work";}
    }}
    function sum${nr}(arr){
        if(!arr.length){
            document.getElementById("text${nr}").innerHTML = "there were no numbers in this text file";
        }else{
            const sum = arr.reduce((partialSum, a) => partialSum + a, 0);
            if(!isNaN(sum)){
                document.getElementById("text${nr}").innerHTML = sum;
            }else{
                document.getElementById("text${nr}").innerHTML = "this didnt work";}
    }}
    function range${nr}(arr){
        if(!arr.length){
            document.getElementById("text${nr}").innerHTML = "there were no numbers in this text file";
        }else{
            arr.sort();
            const range = arr[arr.length - 1] - arr[0];
            if(!isNaN(range)){
                document.getElementById("text${nr}").innerHTML = range;
            }else{
                document.getElementById("text${nr}").innerHTML = "this didnt work";}
    }}
    </script>`
}

//takes html for a single data entry and returns ti with the site template 

export function dataTemplate(html, nr){
    return `
    <!doctype html>
<html>
    <head>
        <title>hw1</title>
        <link rel="stylesheet" href= "styles.css">
        <meta charset="UTF-8">
    </head>
    <body>
    <div class="wrapper">
    <h1> Vefforritun 2, 2022. Verkefni 1: Gagnavinnsla</h1>
    <script src="../src/scripts.js"></script>
        ${html}
    </div>
    </body>
</html>
    `;
}
