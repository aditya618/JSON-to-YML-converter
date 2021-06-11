const YAML = require('yaml');
const fs = require('fs');

const jsonObject = {
    version: "1.0.0",
    dependencies: {
        yaml: "^1.10.0"
    },
    package: {
        exclude: [ ".idea/**", ".gitignore" ]
    }
}

const doc = new YAML.Document();
doc.contents = jsonObject;

fs.writeFileSync('sample.yml', doc.toString());
console.log(doc.toString());