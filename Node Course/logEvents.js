const {format} =require('date-fns')
const {v4:uuid}= require('uuid')
const fs=require('fs')
const fspromises=require('fs').promises
const path=require('path')

const logEvents= async (message)=>{
const datTime=`${format(new Date(),'dd-MM-yyyy\tHH:mm:ss')}`
const logItems=`${datTime}\t${uuid()}\t${message}\n`
console.log(logItems)
try{
     if(!fs.existsSync(path.join(__dirname,'logs'))){
        await fspromises.mkdir(path.join(__dirname,'logs'))
     }

    await fspromises.appendFile(path.join(__dirname,'logs','eventFile.txt'),logItems)
}catch(err){
    console.log(err)
}

}
module.exports=logEvents