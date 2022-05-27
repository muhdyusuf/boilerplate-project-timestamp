// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res)=> {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", (req, res)=> {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

app.get("/api/:date?",(req,res)=>{
 
  let date=req.params.date
  

  if(!/[\s-]/g.test(date) && date!==undefined){
    date=parseInt(date)
  }
  

  const days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
  let months= ["Jan","Feb","Mar","April","May","June","July","August","September","October","November","December"];

  months=months.map(item=>item.slice(0,3))

   const _date=date===undefined? new Date :new Date(date)
   

   if(_date=="Invalid Date"){
     res.send({error:"Invalid Date"})
     return
   }
   
  
 

  // const day=days[_date.getDay()]
  // const month=months[_date.getMonth()]
  // const year=_date.getFullYear()

  // function timeFormatter(val){
  //   if(val>=10)return val
  //   return `0${val}`
  // }
  




 
  console.log(_date.getHours())
  const output={
    unix:_date.getTime(),
    // utc:`${day}, ${_date.getDay()} ${month} ${year} ${timeFormatter(_date.getHours())}:${timeFormatter(_date.getMinutes())}:${timeFormatter(_date.getSeconds())} GMT`
    utc:_date.toUTCString()

  }
  console.log(_date)

  res.send(output)


  
  
  
  

})
