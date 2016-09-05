var express = require('express')
var app = express()
var port = process.env.PORT || 8080


app.get('/', function(req, res){
    var ip = req.headers['x-forwarded-for']
    var lang = req.headers['accept-language'].split(',')[0] 
    var os = req.headers['user-agent'].split('(')[1].split(')')[0]
    var headerObj = { "ipaddress": ip, "language": lang, "software": os}
    res.send(headerObj)
})

app.listen(port)
console.log('Server started! At http://localhost:' + port)