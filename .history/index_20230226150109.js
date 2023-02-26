const fs = require('fs');

function writeHtml5() {
    console.log(process.argv);
    // return 3rd argument specified when execute node like: node index.js myfile.html  
    const fileName = process.argv[2];
    // write file with path and content
    fs.writeFileSync(
        `${process.cwd()}/${fileName}`, 
        html5
}

writeHtml5();