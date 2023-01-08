
const {readFile, writeFile} = require('fs')

readFile('./folder1/first.txt','utf8', (err,result)=>{
  if(err){
    console.log(err);
    return;
  }
  const first = result
  readFile('./folder1/second.txt', 'utf8', (err,result)=>{
    if(err){
      console.log(err);
      return;
    }
    const second = result
    writeFile('./folder1/result-async.txt',`${first}. ${second}`,(err,result)=>{
      if(err){
        console.log(err);
        return
      }
      console.log(result);
    })
  })
})















