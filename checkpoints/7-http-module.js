const http = require('http')

const server = http.createServer((req, res)=>{
  if(req.url === '/'){
    res.write('This is NetworKia')
    res.end()
  }
  if(req.url === '/about'){
    res.write('About Us')
    res.end()
  }
  
})

server.listen(5000)





