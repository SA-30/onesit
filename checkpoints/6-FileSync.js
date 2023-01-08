const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./folder1/first.txt','utf8')
const second = readFileSync('./folder1/second.txt','utf8')

writeFileSync('./folder1/result.txt',`${first}. ${second}`, {flag:'a'})
console.log(first,second);













