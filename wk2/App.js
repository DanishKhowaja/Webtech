const http=require('http');
var date = require('./DateModule')

http.createServer(function(req,res){
    res.writeHead(200, {'Context-type': 'text-plain'})
    res.write("Hello world todays date is "+date.mydate())
    res.end("\nstop.")
}



).listen(8080,()=>{
    console.log("the server is running on port 8080")
})