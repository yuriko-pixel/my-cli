const fs = require('fs');

function writeHtml5() {
    console.log(process.argv);
    // return 3rd argument specified when execute node like: node index.js myfile.html  
    const fileName = process.argv[2];
    // fs.writeFileSync(
    //     `${process.cwd()}/${fileName}`, 
    //     "<html><body></body></html>"
    // )
}

writeHtml5();