const fs = require('fs');

function writeHtml5() {
    console.log(process.argv);
    const fileName = process.argv[2];
    fs.writeFileSync(
        `${process.cwd()}/${fileName}`, 
        "<html><body></body></html>"
    )
}

writeHtml5();