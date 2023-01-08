const path = require('path')

console.log(path.sep);

const pathfile = path.join('/folder1/','folder2','text1.txt')
console.log(pathfile);

const base = path.basename(pathfile)
console.log(base);

const absolute = path.resolve(__dirname,'folder1', 'folder2','text1.txt');
console.log(absolute);
