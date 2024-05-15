const app = require('./app');
const config = require('./config/config');

app.listen(config.PORT,(err)=>{
    if(!err)
    {
        console.log(`Server started on port : ${config.PORT}\nCtr + Click to start http://localhost:8888/test`)
    }else{
        console.log(`Error while starting server.\n Error : - ${err}`)
    }
})
