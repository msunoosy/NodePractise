const { ifError } = require('assert');
const { error } = require('console');
const http=require('http');
const PORT=3000;

const server=http.createServer((req,res)=>{

})

server.listen(PORT,(error)=>{
    if(error){
console.log(error)
    }
    console.log('server listening on '+PORT)
})